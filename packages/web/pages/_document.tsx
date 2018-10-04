import Document, {
  Head,
  Main,
  NextDocumentContext,
  NextScript,
} from 'next/document';
import { ServerStyleSheet } from 'styled-components';

interface IProps {
  styleTags: any;
}

export default class MyDocument extends Document<IProps> {
  public static getInitialProps({ renderPage }: NextDocumentContext) {
    const sheet = new ServerStyleSheet();
    const page = renderPage((APP: any) => (props: any) =>
      sheet.collectStyles(<APP {...props} />),
    );
    const styleTags = sheet.getStyleElement();
    return { ...page, styleTags };
  }

  public render() {
    return (
      <html>
        <Head>{this.props.styleTags}</Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    );
  }
}
