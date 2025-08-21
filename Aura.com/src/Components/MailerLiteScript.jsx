import React, { useEffect } from "react";

const MailerLiteScript = () => {
  useEffect(() => {
    (function (w, d, e, u, f, l, n) {
      w[f] =
        w[f] ||
        function () {
          (w[f].q = w[f].q || []).push(arguments);
        };
      l = d.createElement(e);
      l.async = 1;
      l.src = u;
      n = d.getElementsByTagName(e)[0];
      n.parentNode.insertBefore(l, n);
    })(
      window,
      document,
      "script",
      "https://assets.mailerlite.com/js/universal.js",
      "ml"
    );

    window.ml("account", "1709398");
  }, []);

  return null; // this script doesn’t render anything visible
};

export default MailerLiteScript;
