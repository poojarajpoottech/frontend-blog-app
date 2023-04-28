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
            content="Welcome to designwithsatya, a blog dedicated to all things technical and web development. Whether you're a seasoned pro or just starting out, our expert insights and tips will help you stay on top of the latest industry trends and advance your skills"
          />
          <meta
            name="description"
            content="Interested in learning the ins and outs of web development? Look no further than designwithsatya, where we cover everything from programming languages to server architecture to help you become a more well-rounded and versatile developer."
          />
          <meta
            name="keywords"
            content="User Experience (UX) Design,User Interface (UI) Design,Graphic Design,Web Design,Mobile App Design,Design Thinking,Design Tools,Design Trends,Design Inspiration,Product Design,"
          />
          <meta
            name="keywords"
            content="Programming languagesWeb development,Mobile app development,Cybersecurity,Artificial intelligence,Cloud computing,Data analytics,Internet of Things (IoT),Machine learning,DevOps"
          />
          <meta
            name="keywords"
            content="Design with Satya's Top 10 UX Design Trends for 2023,Maximizing Mobile App Design with Design with Satya,Design Thinking 101: A Guide from Design with SatyaDesign with Satya's Ultimate Guide to Graphic Design PrinciplesWeb Design Best Practices: Tips from Design with Satya"
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
