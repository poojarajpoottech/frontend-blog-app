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
          <link rel="apple-touch-icon" sizes="180x180" href="/favicon/mylogo.png" />
          <link rel="icon" type="image/png" sizes="32x32" href="/favicon/mylogo.png" />
          <link rel="icon" type="image/png" sizes="16x16" href="/favicon/mylogo.png" />

          {/* Emotion */}
          <meta name="emotion-insertion-point" content="" />
          {this.props.emotionStyleTags}

          {/* Meta */}
          <meta
            name="description"
            content="Explore the world of frontend programming, AI, ChatGPT, and stay updated with the latest technological advancements. Discover insightful articles, tutorials, and videos that empower developers and enthusiasts in the ever-evolving tech landscape."
          />
          <meta
            name="keywords"
            content="frontend programming, AI, ChatGPT, technology, latest advancements, web development, programming tutorials, artificial intelligence, machine learning, natural language processing"
          />
          <meta name="author" content="TechHubAI" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
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
