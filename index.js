// post  /signup  req  body- {google: False, email, password} (using google login button {google:True, email})  || res
{
  data: [{ status: "success or failed" }];
}

// post  /login   req  body- {google: False, email, password} (using google signup button {google:True, email})  || res
{
  data: [{ status: "success or failed" }];
}

// post  /videolink  req  body- {"url": "http://url.com"}  || res  JSON -
{
  data: [
    "caption",
    {
      slangs: [
        ["example-slang-1_definition", ["example1", "example2"]],
        ["example-slang-2_definition", ["example1", "example2"]],
      ],
    },
    {
      phraselVerbs: [
        ["example-pverb-1_definition", ["example1", "example2"]],
        ["example-pverb-2_definition", ["example1", "example2"]],
      ],
    },
  ];
}
