import Document, { Html, Head, Main, NextScript } from "next/document";
import crypto from "crypto";

const cspHashOf = (text) => {
  const hash = crypto.createHash("sha256");
  hash.update(text);
  return `'sha256-${hash.digest("base64")}'`;
};

export default class MyDocument extends Document {
  render() {
    let csp = `frame-src https://www.google.com/; script-src 'self' ${cspHashOf(
      NextScript.getInlineScriptSource(this.props))}; style-src 'self' 'unsafe-inline' ${cspHashOf(
        NextScript.getInlineScriptSource(this.props))}; ` 
        
    if (process.env.NODE_ENV !== "production") {
      csp = `style-src 'self' 'unsafe-inline'; default-src 'self'; img-src 'self' data:;
       media-src res.cloudinary.com; frame-src https://www.google.com/; script-src 'unsafe-eval' 'self' ${cspHashOf( NextScript.getInlineScriptSource(this.props) )}`;
    }

    return (
      <Html lang="en">
        <Head>
          <meta httpEquiv="Content-Security-Policy" content={csp} />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
