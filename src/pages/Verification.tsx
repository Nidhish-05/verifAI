import React, { useState, useCallback } from "react";
import { Link } from "react-router-dom";
import { Shield, UploadCloud, FileText, X, Loader2, CheckCircle, AlertTriangle, ShieldAlert } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { useDropzone } from "react-dropzone";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";

type VerificationStatus = "idle" | "verifying" | "complete";
type VerificationResult = "success" | "failed" | "tampered" | null;

const VerificationPage = () => {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [verificationStatus, setVerificationStatus] = useState<VerificationStatus>("idle");
  const [verificationResult, setVerificationResult] = useState<VerificationResult>(null);

  const onDrop = useCallback((acceptedFiles: File[]) => {
    if (acceptedFiles && acceptedFiles.length > 0) {
      handleFileSelect(acceptedFiles[0]);
    }
  }, []);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: {
      "application/pdf": [".pdf"],
      "image/jpeg": [".jpeg", ".jpg"],
      "image/png": [".png"],
    },
    multiple: false,
  });

  const handleFileSelect = (file: File) => {
    setSelectedFile(file);
    setVerificationStatus("idle");
    setVerificationResult(null);
  };

  const handleRemoveFile = () => {
    setSelectedFile(null);
    setVerificationStatus("idle");
    setVerificationResult(null);
  };

  const handleVerification = () => {
    if (!selectedFile) return;

    setVerificationStatus("verifying");
    setVerificationResult(null);

    // Simulate API call and verification process
    setTimeout(() => {
      const randomResult: VerificationResult[] = ["success", "failed", "tampered"];
      const result = randomResult[Math.floor(Math.random() * randomResult.length)];
      setVerificationResult(result);
      setVerificationStatus("complete");
    }, 3000);
  };
  
  const resetVerification = () => {
      setSelectedFile(null);
      setVerificationStatus("idle");
      setVerificationResult(null);
  }

  const renderResult = () => {
    if (verificationStatus !== "complete" || !verificationResult) return null;

    switch (verificationResult) {
      case "success":
        return (
          <Alert variant="default" className="bg-green-500/10 border-green-500/50 text-green-700 dark:text-green-400">
            <CheckCircle className="h-4 w-4 !text-green-500" />
            <AlertTitle>Verification Successful</AlertTitle>
            <AlertDescription>This document has been verified as authentic.</AlertDescription>
          </Alert>
        );
      case "failed":
        return (
          <Alert variant="destructive" className="bg-yellow-500/10 border-yellow-500/50 text-yellow-700 dark:text-yellow-400">
            <AlertTriangle className="h-4 w-4 !text-yellow-500" />
            <AlertTitle>Verification Failed</AlertTitle>
            <AlertDescription>The document could not be verified against our records.</AlertDescription>
          </Alert>
        );
      case "tampered":
        return (
          <Alert variant="destructive">
            <ShieldAlert className="h-4 w-4" />
            <AlertTitle>Forgery Alert</AlertTitle>
            <AlertDescription>Potential signs of tampering have been detected in this document.</AlertDescription>
          </Alert>
        );
      default:
        return null;
    }
  };


  return (
    <div className="min-h-screen bg-background text-foreground">
      <nav className="fixed top-0 w-full bg-background/80 backdrop-blur-md z-50 border-b border-border">
        <div className="container mx-auto px-4 h-16 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2">
            <Shield className="w-8 h-8 text-secondary" />
            <span className="text-2xl font-bold gradient-primary bg-clip-text text-transparent">VERIFAI</span>
          </Link>
          <Button asChild variant="ghost">
            <Link to="/">Back to Home</Link>
          </Button>
        </div>
      </nav>

      <main className="container mx-auto px-4 pt-24 pb-12 flex items-center justify-center min-h-screen">
        <Card className="w-full max-w-2xl shadow-glow">
          <CardHeader>
            <CardTitle className="text-3xl font-bold text-center">Start Verification</CardTitle>
            <CardDescription className="text-center text-muted-foreground text-lg">
              Upload your academic document to begin the verification process.
            </CardDescription>
          </CardHeader>
          <CardContent className="p-8">
            <div className="space-y-6">
              {!selectedFile && (
                <div
                  {...getRootProps()}
                  className={`flex flex-col items-center justify-center w-full h-64 border-2 border-dashed rounded-lg cursor-pointer transition-colors ${
                    isDragActive ? "border-primary bg-primary/10" : "border-border hover:border-primary/50 hover:bg-muted/50"
                  }`}
                >
                  <input {...getInputProps()} />
                  <div className="flex flex-col items-center justify-center pt-5 pb-6">
                    <UploadCloud className="w-12 h-12 mb-4 text-muted-foreground" />
                    <p className="mb-2 text-lg text-muted-foreground">
                      <span className="font-semibold">Click to upload</span> or drag and drop
                    </p>
                    <p className="text-sm text-muted-foreground">PDF, PNG, JPG (MAX. 10MB)</p>
                  </div>
                </div>
              )}

              {selectedFile && (
                <div className="w-full p-4 border rounded-lg bg-muted/50 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <FileText className="w-6 h-6 text-primary" />
                    <div>
                      <p className="font-medium text-foreground truncate">{selectedFile.name}</p>
                      <p className="text-sm text-muted-foreground">
                        {(selectedFile.size / 1024 / 1024).toFixed(2)} MB
                      </p>
                    </div>
                  </div>
                  <Button variant="ghost" size="icon" onClick={handleRemoveFile}>
                    <X className="w-4 h-4" />
                  </Button>
                </div>
              )}

              <div className="mt-6">
                {verificationStatus === 'complete' ? (
                     <div className="space-y-4">
                        {renderResult()}
                        <Button onClick={resetVerification} className="w-full" variant="secondary" size="lg">
                            Verify Another Document
                        </Button>
                     </div>
                ) : (
                    <Button
                        onClick={handleVerification}
                        disabled={!selectedFile || verificationStatus === "verifying"}
                        className="w-full"
                        variant="hero"
                        size="lg"
                    >
                        {verificationStatus === "verifying" && (
                        <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                        )}
                        {verificationStatus === "verifying" ? "Verifying..." : "Verify Now"}
                    </Button>
                )}
              </div>
            </div>
          </CardContent>
        </Card>
      </main>
    </div>
  );
};

export default VerificationPage;
