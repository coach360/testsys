import React, { useState, useEffect } from 'react';
import { Mail, CheckCircle, RefreshCw, AlertCircle } from 'lucide-react';

interface EmailVerificationProps {
  email: string;
  onVerify: () => void;
}

const EmailVerification: React.FC<EmailVerificationProps> = ({ email, onVerify }) => {
  const [verificationCode, setVerificationCode] = useState('');
  const [isVerifying, setIsVerifying] = useState(false);
  const [error, setError] = useState('');
  const [countdown, setCountdown] = useState(60);
  const [canResend, setCanResend] = useState(false);
  const [resending, setResending] = useState(false);
  const [resendSuccess, setResendSuccess] = useState(false);
  const [codeDigits, setCodeDigits] = useState<string[]>(['', '', '', '', '', '']);
  const inputRefs = Array(6).fill(0).map(() => React.createRef<HTMLInputElement>());

  // Generate a random verification code for demo purposes
  const [demoCode] = useState(() => {
    return Math.floor(100000 + Math.random() * 900000).toString();
  });

  // Countdown timer for resend button
  useEffect(() => {
    if (countdown > 0 && !canResend) {
      const timer = setTimeout(() => setCountdown(countdown - 1), 1000);
      return () => clearTimeout(timer);
    } else if (countdown === 0 && !canResend) {
      setCanResend(true);
    }
  }, [countdown, canResend]);

  // Update verification code when digits change
  useEffect(() => {
    setVerificationCode(codeDigits.join(''));
  }, [codeDigits]);

  const handleDigitChange = (index: number, value: string) => {
    // Only allow digits
    if (value && !/^\d+$/.test(value)) return;

    const newCodeDigits = [...codeDigits];
    
    // Handle paste event with multiple characters
    if (value.length > 1) {
      const pastedChars = value.split('').slice(0, 6 - index);
      for (let i = 0; i < pastedChars.length; i++) {
        if (index + i < 6) {
          newCodeDigits[index + i] = pastedChars[i];
        }
      }
      setCodeDigits(newCodeDigits);
      
      // Focus on the appropriate input after paste
      const nextIndex = Math.min(index + pastedChars.length, 5);
      if (nextIndex < 6) {
        inputRefs[nextIndex].current?.focus();
      }
      return;
    }

    // Handle single character input
    newCodeDigits[index] = value;
    setCodeDigits(newCodeDigits);
    
    // Auto-focus next input if a digit was entered
    if (value && index < 5) {
      inputRefs[index + 1].current?.focus();
    }
  };

  const handleKeyDown = (index: number, e: React.KeyboardEvent<HTMLInputElement>) => {
    // Move focus to previous input on backspace if current input is empty
    if (e.key === 'Backspace' && !codeDigits[index] && index > 0) {
      inputRefs[index - 1].current?.focus();
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!verificationCode || verificationCode.length !== 6) {
      setError('Please enter the complete 6-digit verification code');
      return;
    }
    
    // Clear any previous errors
    setError('');
    setIsVerifying(true);
    
    // Simulate API call delay
    setTimeout(() => {
      // For demo purposes, we'll accept any 6-digit code or the demo code
      if (verificationCode === demoCode || (verificationCode.length === 6 && /^\d+$/.test(verificationCode))) {
        onVerify();
      } else {
        setError('Invalid verification code. Please try again.');
      }
      setIsVerifying(false);
    }, 1500);
  };

  const handleResendCode = () => {
    setResending(true);
    setResendSuccess(false);
    
    // Simulate API call to resend verification code
    setTimeout(() => {
      setResending(false);
      setResendSuccess(true);
      setCanResend(false);
      setCountdown(60);
      
      // Hide success message after 5 seconds
      setTimeout(() => {
        setResendSuccess(false);
      }, 5000);
    }, 2000);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4">
      <div className="bg-white rounded-lg shadow-xl w-full max-w-md overflow-hidden">
        <div className="bg-indigo-600 p-6 text-center">
          <h1 className="text-2xl font-bold text-white">Email Verification</h1>
          <p className="text-indigo-200 mt-2">Verify your email to continue</p>
        </div>
        
        <div className="p-6">
          <div className="flex justify-center mb-6">
            <div className="h-20 w-20 rounded-full bg-indigo-100 flex items-center justify-center">
              <Mail size={40} className="text-indigo-600" />
            </div>
          </div>
          
          <div className="text-center mb-6">
            <h2 className="text-xl font-semibold text-gray-800">Check your inbox</h2>
            <p className="text-gray-600 mt-2">
              We've sent a verification code to <span className="font-medium">{email}</span>
            </p>
            <p className="text-gray-600 mt-1">
              Enter the code below to verify your email address
            </p>
          </div>
          
          {error && (
            <div className="mb-4 p-3 bg-red-50 border border-red-200 text-red-700 rounded-lg flex items-center">
              <AlertCircle size={18} className="mr-2 flex-shrink-0" />
              <span>{error}</span>
            </div>
          )}
          
          {resendSuccess && (
            <div className="mb-4 p-3 bg-green-50 border border-green-200 text-green-700 rounded-lg flex items-center">
              <CheckCircle size={18} className="mr-2 flex-shrink-0" />
              <span>Verification code resent successfully!</span>
            </div>
          )}
          
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="verification-code" className="block text-sm font-medium text-gray-700 mb-3">
                Verification Code
              </label>
              
              <div className="flex justify-between mb-2">
                {codeDigits.map((digit, index) => (
                  <input
                    key={index}
                    ref={inputRefs[index]}
                    type="text"
                    maxLength={1}
                    value={digit}
                    onChange={(e) => handleDigitChange(index, e.target.value)}
                    onKeyDown={(e) => handleKeyDown(index, e)}
                    className="w-12 h-12 text-center text-xl font-bold border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    autoComplete="off"
                  />
                ))}
              </div>
              
              <p className="mt-2 text-xs text-gray-500 text-center">
                For demo purposes, you can enter any 6-digit code or use: <span className="font-medium">{demoCode}</span>
              </p>
            </div>
            
            <div>
              <button
                type="submit"
                className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                disabled={isVerifying}
              >
                {isVerifying ? (
                  <>
                    <RefreshCw size={18} className="mr-2 animate-spin" />
                    Verifying...
                  </>
                ) : (
                  <>
                    <CheckCircle size={18} className="mr-2" />
                    Verify Email
                  </>
                )}
              </button>
            </div>
          </form>
          
          <div className="mt-6 text-center">
            <p className="text-sm text-gray-600">
              Didn't receive the code?{' '}
              {canResend ? (
                <button
                  onClick={handleResendCode}
                  className="font-medium text-indigo-600 hover:text-indigo-500"
                  disabled={resending}
                >
                  {resending ? 'Resending...' : 'Resend Code'}
                </button>
              ) : (
                <span className="text-gray-500">
                  Resend in {countdown}s
                </span>
              )}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EmailVerification;