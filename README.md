# overlapping-act# overlapping-act

run with `npm run test`

Should get this error.

 console.error
    Warning: You seem to have overlapping act() calls, this is not supported. Be sure to await previous act() calls before making a new one.

      at CustomConsole.error (node_modules/@testing-library/react/dist/act-compat.js:55:34)
      at CustomConsole.error (node_modules/@testing-library/react/dist/act-compat.js:55:34)
      at printWarning (node_modules/react-dom/cjs/react-dom-test-utils.development.js:87:30)
      at error (node_modules/react-dom/cjs/react-dom-test-utils.development.js:59:5)
      at onDone (node_modules/react-dom/cjs/react-dom-test-utils.development.js:921:9)
      at node_modules/react-dom/cjs/react-dom-test-utils.development.js:960:13

  console.error
    Warning: An update to Cry inside a test was not wrapped in act(...).

    When testing, code that causes React state updates should be wrapped into act(...):

    act(() => {
      /* fire events that update state */
    });
    /* assert on the output */

    This ensures that you're testing the behavior the user would see in the browser. Learn more at https://fb.me/react-wrap-tests-with-act
        in Cry

      25 |     const selectedState = "MI";
      26 |     const result = await apiCall(selectedState);
    > 27 |     setSelectedState(selectedState);
         |     ^
      28 |   };
      29 |
      30 | return  (

      at printWarning (node_modules/react-dom/cjs/react-dom.development.js:88:30)
      at error (node_modules/react-dom/cjs/react-dom.development.js:60:5)
      at warnIfNotCurrentlyActingUpdatesInDEV (node_modules/react-dom/cjs/react-dom.development.js:23284:7)
      at setSelectedState (node_modules/react-dom/cjs/react-dom.development.js:15656:9)
      at _callee$ (src/cry.spec.js:27:5)
      at tryCatch (node_modules/regenerator-runtime/runtime.js:63:40)
      at Generator.invoke [as _invoke] (node_modules/regenerator-runtime/runtime.js:294:22)

