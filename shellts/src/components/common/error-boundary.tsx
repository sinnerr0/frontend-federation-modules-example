import React, { ErrorInfo } from "react";

/**
 * 클라이언트 에러 발생 시 처리
 */
export default class ErrorBoundary extends React.Component {
  state: Readonly<{ hasError: boolean }>;
  props: any;

  constructor(props: any) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error: any) {
    // Update state so the next render will show the fallback UI.
    return { hasError: true };
  }

  componentDidCatch(error: Error, info: ErrorInfo) {
    // TODO: client error tracking을 위해 Datadog등 서버에 에러 로그 보내야 함
    // logError(error, info.componentStack);
  }
  render() {
    if (this.state.hasError) {
      // You can render any custom fallback UI
      return this.props.fallback ? (
        this.props.fallback
      ) : (
        <div attr-note="client-error"></div>
      );
    }

    return this.props.children;
  }
}
