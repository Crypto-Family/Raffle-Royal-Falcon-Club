/* eslint-disable react/jsx-props-no-spreading */
import Head from 'next/head';
// import dynamic from 'next/dynamic';
// import Script from 'next/script';

import { Provider } from 'react-redux';
import store from 'src/redux/store';

import ReactNotification from 'react-notifications-component';
import { custom_notification_types } from 'src/static/notifications';

import 'src/scss/main.scss';

function MyApp({ Component, pageProps }) {
    return (
        <Provider store={store}>
            <Head>
                <title>Template</title>
            </Head>

            <ReactNotification types={custom_notification_types} />

            {/* <Script
                src={`https://kit.fontawesome.com/<fontAwesomeKey>.js`}
            ></Script> */}
            <Component {...pageProps} />
        </Provider>
    );
}

export default MyApp;
