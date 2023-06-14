import * as React from 'react';
// next
import Document, { Html, Head, Main, NextScript } from 'next/document';
// @emotion
import createEmotionServer from '@emotion/server/create-instance';
// utils
import createEmotionCache from '../utils/createEmotionCache';
// theme
import palette from '../theme/palette';
import { primaryFont } from '../theme/typography';

// ----------------------------------------------------------------------

export default class MyDocument extends Document {
  render() {
    return (
      <Html lang="en" className={primaryFont.className}>
        <Head>
          <meta charSet="utf-8" />
          <link rel="manifest" href="/manifest.json" />

          <meta name="theme-color" content={palette('light').primary.main} />

          {/* Favicon */}
          <link rel="apple-touch-icon" sizes="180x180" href="/favicon/mylogo.avif" />
          <link rel="icon" type="image/png" sizes="32x32" href="/favicon/mylogo.avif" />
          <link rel="icon" type="image/png" sizes="16x16" href="/favicon/mylogo.avif" />

          {/* Emotion */}
          <meta name="emotion-insertion-point" content="" />
          {this.props.emotionStyleTags}

          {/* Meta */}

          <meta
            name="description"
            content="Welcome to UnboxHub, the ultimate destination for product unboxing and in-depth information. Explore our extensive collection of unboxing videos and detailed reviews, where we unravel the excitement of unboxing various products across different categories. From gadgets and electronics to beauty and fashion, we provide unbiased insights, pros and cons, and valuable recommendations to help you make informed purchasing decisions. Discover the latest trends, compare products side by side, and gain expert insights into the best products on the market. Join our vibrant community of unboxing enthusiasts and stay updated with the hottest releases and exclusive deals. Get ready to experience the thrill of unboxing and unlock a world of product knowledge at UnboxHub"
          />
          <meta
            name="keywords"
            content="Product unboxing,Unboxing reviews,Product reviews,Unboxing videos,Product information,Best product unboxing,Unboxing experience,Product specifications,Honest product reviews,Unboxing guide,Unboxing tutorials,Unboxing tips,Latest product releases,Top product recommendations,Unboxing insights,Comparative product analysis,Popular product unboxing,Unboxing enthusiasts,Unboxing community,Unboxing trends"
          />
          <meta
            name="keywords"
            content="Product unboxing,Unboxing reviews,Product reviews,Unboxing videos,Product information,Best product unboxing,Unboxing experience,Product specifications,Honest product reviews,Unboxing guide,Unboxing tutorials,Unboxing tips,Latest product releases,Top product recommendations,Unboxing insights,Comparative product analysis,Popular product unboxing,Unboxing enthusiasts,Unboxing community,Unboxing trends"
          />
        </Head>

        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

// ----------------------------------------------------------------------

MyDocument.getInitialProps = async (ctx) => {
  const originalRenderPage = ctx.renderPage;

  const cache = createEmotionCache();

  const { extractCriticalToChunks } = createEmotionServer(cache);

  ctx.renderPage = () =>
    originalRenderPage({
      enhanceApp: (App) =>
        function EnhanceApp(props) {
          return <App emotionCache={cache} {...props} />;
        },
    });

  const initialProps = await Document.getInitialProps(ctx);

  const emotionStyles = extractCriticalToChunks(initialProps.html);

  const emotionStyleTags = emotionStyles.styles.map((style) => (
    <style
      data-emotion={`${style.key} ${style.ids.join(' ')}`}
      key={style.key}
      // eslint-disable-next-line react/no-danger
      dangerouslySetInnerHTML={{ __html: style.css }}
    />
  ));

  return {
    ...initialProps,
    emotionStyleTags,
  };
};
