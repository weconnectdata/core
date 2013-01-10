PR.registerLangHandler(PR.createSimpleLexer([["pln",/r ]+/,null," n"]],[["str",/^"(?:r"]|(?:n?|n|f)|s])*"/,null],["str",/^'(?:r']|(?:n?|n|f)|s])*'/,null],["lang-css-str",/(([^"')]*))/i],["kwd",/^(?:url|rgb|!important|@import|@page|@media|@charset|inherit)(?=w-]|$)/i,null],["lang-css-kw",/^(-?(?:[_a-z]|da-f]+ ?)(?:w-]|da-f]+ ?)*)s*:/i],["com",//*[^*]**+(?:[^*/][^*]**+)*//],["com",
/^(?:<!--|-->)/],["lit",/^(?:d+|d*.d+)(?:%|[a-z]+)?/i],["lit",/^#da-f]{3,6}/i],["pln",/^-?(?:[_a-z]|da-f]+ ?)(?:w-]|da-f]+ ?)*/i],["pun",/w"']+/]]),["css"]);PR.registerLangHandler(PR.createSimpleLexer([],[["kwd",/^-?(?:[_a-z]|da-f]+ ?)(?:w-]|da-f]+ ?)*/i]]),["css-kw"]);PR.registerLangHandler(PR.createSimpleLexer([],[["str",/^[^"')]+/]]),["css-str"]);