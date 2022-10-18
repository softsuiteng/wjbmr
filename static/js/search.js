const queryText = document.getElementById("query-text");

function displayResults(results, store) {
  const searchResults = document.getElementById("results");
  if (results.length) {
    queryText && (queryText.innerText = `You searched for "${query}"`);

    let resultList = "";
    // Iterate and build result list elements
    for (const n in results) {
      const item = store[results[n].ref];
      resultList +=
        '<li><div><a href="' + item.url + '"><h5>' + item.title + "</h5></a>";
      resultList +=
        '<p style="color: #a7a0b3; line-height: 1.2; margin: 0.5em 0 0; margin-bottom: 5px; font-size: 12px; text-transform: uppercase;">' +
        item.keywords +
        "</p>";
      // resultList += '<small>' + item.publication + '</small><br>'
      resultList +=
        "<span>" +
        item.authors +
        "</span>" +
        '<small style="white-space: nowrap;"><em> &mdash; ' +
        item.publication +
        "</em></small></div></li>";
      // resultList += '<p>' + item.content.substring(0, 200) + '...</p></li>'
    }
    searchResults.innerHTML = resultList;
  } else {
    queryText.innerText = "";
    searchResults.innerHTML = "<li>No results found.</li>";
  }
}

// Get the query parameter(s)
const params = new URLSearchParams(window.location.search);
const query = params.get("query");

// Perform a search if there is a query
if (query) {
  // Retain the search input in the form when displaying results
  document.getElementById("search-input").setAttribute("value", query);

  const idx = lunr(function () {
    this.ref("id");
    this.field("title", {
      boost: 15,
    });
    this.field("keywords");
    this.field("authors");
    this.field("content", {
      boost: 10,
    });

    for (const key in window.store) {
      this.add({
        id: key,
        title: window.store[key].title,
        authors: window.store[key].authors,
        keywords: window.store[key].keywords,
        content: window.store[key].content,
      });
    }
  });

  // Perform the search
  const results = idx.search(query);

  // Update the list with results
  displayResults(results, window.store);
}
