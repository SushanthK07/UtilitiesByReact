function UserInput(props) {
  const [name, setName] = React.useState('');
  const [error, setError] = React.useState('');

  const { collectUsername } = props;
  const submitUsername = e => {
    if (name === '') {
      setError("Name can't be empty");
      return;
    }
    setError('');
    collectUsername(name);
    // e.target.parentElement.classList.add('d-none');
  };

  return /*#__PURE__*/(
    React.createElement("div", null, /*#__PURE__*/
    React.createElement("label", { for: "username" }, "Enter your name - "), /*#__PURE__*/
    React.createElement("input", { id: "username", type: "text", value: name, onChange: e => setName(e.target.value), onBlur: submitUsername }), /*#__PURE__*/
    React.createElement("p", null, error)));


}

function Greet(props) {
  const { username } = props;
  return /*#__PURE__*/(
    React.createElement("div", { id: "Greet" }, /*#__PURE__*/
    React.createElement("h1", null, "Hello ", username)));


}

function Joke() {
  const initialState = {
    loading: false,
    joke: '',
    error: '' };

  const [state, setState] = React.useState(initialState);

  const fetchJoke = () => {
    setState({
      ...state, loading: true, joke: '' });

    fetch('https://apis.ccbp.in/jokes/random').
    then(response => response.json()).
    then(jsonData => {
      setState({
        ...state,
        loading: false,
        joke: jsonData.value });

    }).
    catch(error => {
      setState({
        ...prevState,
        loading: false,
        error: error.message });

    });
  };

  return /*#__PURE__*/(
    React.createElement("div", null, /*#__PURE__*/
    React.createElement("div", { className: "joke-bg-container p-3 d-flex flex-column justify-content-center text-center" }, /*#__PURE__*/
    React.createElement("img", { src: "https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/random-joke-img.png", className: "w-25 ml-auto mr-auto" }), /*#__PURE__*/
    React.createElement("button", { className: "joke-button p-1 ml-auto mr-auto mt-2", onClick: fetchJoke }, "New Joke"),
    state.loading ? /*#__PURE__*/
    React.createElement("div", { className: "text-center my-3" }, /*#__PURE__*/
    React.createElement("div", { className: "spinner-border", role: "status" }, /*#__PURE__*/
    React.createElement("span", { className: "visually-hidden" }))) :


    null, /*#__PURE__*/
    React.createElement("h5", { className: "joke-text mt-3" }, state.joke))));



}

function SearchWiki() {
  const initialState = {
    loading: false,
    searchResults: [] };

  const [state, setState] = React.useState(initialState);
  const [input, setInput] = React.useState('');

  const fetchResults = e => {
    if (e.key === 'Enter') {
      const search = input;

      setState({
        ...state, loading: true });


      fetch(`https://apis.ccbp.in/wiki-search?search=${search}`).
      then(response => response.json()).
      then(jsonData => {
        const searchResults = jsonData['search_results'];
        setState({
          ...state,
          loading: false,
          searchResults: searchResults });

      }).
      catch(error => {
        setState({
          ...initialState,
          loading: false,
          error: error.message });

      });
    }
  };

  return /*#__PURE__*/(
    React.createElement("div", { className: "bg-white" }, /*#__PURE__*/
    React.createElement("div", { className: "wiki-search-header text-center" }, /*#__PURE__*/
    React.createElement("img", { class: "wiki-logo", src: "https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/wiki-logo-img.png" }), /*#__PURE__*/
    React.createElement("br", null), /*#__PURE__*/
    React.createElement("input", { id: "searchInput", placeholder: "Type a keyword and press Enter to search", type: "search", class: "search-input w-100", value: input, onChange: e => setInput(e.target.value), onKeyDown: fetchResults })),

    state.loading ? /*#__PURE__*/
    React.createElement("div", { className: "spinner-border", role: "status" }, /*#__PURE__*/
    React.createElement("span", { className: "visually-hidden" })) :

    null, /*#__PURE__*/
    React.createElement("div", { id: "searchResults", className: "search-results" },

    state.searchResults.map(result => {
      const { title, link, description } = result;
      return /*#__PURE__*/(
        React.createElement("div", { className: "result-item" }, /*#__PURE__*/
        React.createElement("a", { href: link, target: "_blank", className: "result-title" }, title), /*#__PURE__*/
        React.createElement("br", null), /*#__PURE__*/
        React.createElement("a", { className: "result-url", href: link, target: "_blank" }, link), /*#__PURE__*/
        React.createElement("br", null), /*#__PURE__*/
        React.createElement("p", { className: "link-description" }, description), /*#__PURE__*/
        React.createElement("hr", null)));


    }))));




}

function NumberFact() {
  const initialState = {
    loading: false,
    fact: '0 is the atomic number of the theoretical element tetraneutron.',
    error: '' };


  const [state, setState] = React.useState(initialState);
  const [input, setInput] = React.useState('');

  const getFact = event => {
    if (event.key === 'Enter') {
      const numberToSearch = event.target.value;
      // console.log(numberToSearch);

      if (numberToSearch === "") {
        alert('Enter the valid number');
        return;
      }

      setState({
        ...state,
        loading: true,
        fact: '' });


      fetch(`https://apis.ccbp.in/numbers-fact?number=${numberToSearch}`).
      then(response => response.json()).
      then(jsonData => {
        const fact = jsonData['fact'];
        setState({
          ...state,
          loading: false,
          fact: fact });

      }).
      catch(error => {
        setState({
          ...state,
          loading: false,
          fact: '',
          error: error });

      });
    }
  };

  return /*#__PURE__*/(
    React.createElement("div", null, /*#__PURE__*/
    React.createElement("div", { className: "p-2 bg-container d-flex flex-column justify-content-center text-center" }, /*#__PURE__*/
    React.createElement("h1", { className: "heading" }, "Enter a number to know interesting facts about the number"), /*#__PURE__*/
    React.createElement("input", { id: "userInput", type: "search", className: "form-control user-input ml-auto mr-auto mt-4", placeholder: "Enter a Number", onKeyDown: getFact, value: input, onChange: e => setInput(e.target.value) }),
    state.loading ? /*#__PURE__*/
    React.createElement("div", { className: "d-flex flex-row justify-content-center p-3" }, /*#__PURE__*/
    React.createElement("div", { className: "spinner-border", role: "status" }, /*#__PURE__*/
    React.createElement("span", { className: "visually-hidden" }))) :


    null, /*#__PURE__*/
    React.createElement("p", { id: "fact", className: "fact-text mt-4" }, state.fact))));



}

function Countries() {
  const initialState = {
    loading: true,
    countries: [],
    country: '',
    error: '' };


  const [state, setState] = React.useState(initialState);
  const [input, setInput] = React.useState('');

  React.useEffect(() => {
    const url = 'https://restcountries.eu/rest/v2/all?fields=name;population;flag';
    fetch(url).
    then(function (response) {
      return response.json();
    }).
    then(function (jsonData) {
      setState({
        ...state,
        loading: false,
        countries: jsonData });

    });

  }, []);

  const fetchCountry = event => {
    const userCountry = input;

    const country = state.countries.find(eachCountry => {
      return eachCountry.name.toLowerCase() === userCountry.toLowerCase();
    });

    if (country) {
      setState({
        ...state,
        country: country });

    }
  };

  return /*#__PURE__*/(
    React.createElement("div", null, /*#__PURE__*/
    React.createElement("div", { className: "container pt-5" }, /*#__PURE__*/
    React.createElement("div", { className: "row" }, /*#__PURE__*/
    React.createElement("h1", { className: "col-12 country-heading text-center" }, "Find the Countries Population"), /*#__PURE__*/
    React.createElement("div", { className: "col-12 text-center mt-3" }, /*#__PURE__*/
    React.createElement("input", { id: "searchInput", type: "search", placeholder: "Search for a Country", className: "form-control country-search-input", onKeyUp: fetchCountry, value: input, onChange: e => setInput(e.target.value) })),

    state.loading ? /*#__PURE__*/
    React.createElement("div", { className: "text-center p-3" }, /*#__PURE__*/
    React.createElement("div", { className: "spinner-border", role: "status" }, /*#__PURE__*/
    React.createElement("span", { className: "visually-hidden" }))) :


    null), /*#__PURE__*/

    React.createElement("div", { id: "resultCountries", className: "row result-countries" },

    state.country ? /*#__PURE__*/


    React.createElement("div", { className: "col-12 col-md-6 country-card d-flex flex-row" }, /*#__PURE__*/
    React.createElement("img", { src: state.country.flag, className: "country-flag" }), /*#__PURE__*/
    React.createElement("div", { className: "pl-3" }, /*#__PURE__*/
    React.createElement("h1", { className: "country-name" }, state.country.name), /*#__PURE__*/
    React.createElement("p", { className: "country-population" }, state.country.population))) :






    state.countries.map(country => {
      const { flag, name, population } = country;
      return /*#__PURE__*/(
        React.createElement("div", { className: "col-12 col-md-6 country-card d-flex flex-row" }, /*#__PURE__*/
        React.createElement("img", { src: flag, className: "country-flag" }), /*#__PURE__*/
        React.createElement("div", { className: "pl-3" }, /*#__PURE__*/
        React.createElement("h1", { className: "country-name" }, name), /*#__PURE__*/
        React.createElement("p", { className: "country-population" }, population))));


    })))));






}

function Quote() {
  const initialState = {
    loading: false,
    quote: '',
    author: '',
    error: '' };

  const [state, setState] = React.useState(initialState);

  const fetchQuote = () => {
    setState({
      ...state, loading: true, joke: '' });

    fetch('https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json').
    then(response => response.json()).
    then(jsonData => {
      const { quotes } = jsonData;
      const randomIndex = Math.floor(Math.random() * 100);
      const quoteObj = quotes[randomIndex];
      setState({
        ...state,
        loading: false,
        quote: quoteObj.quote,
        author: quoteObj.author });

    }).
    catch(error => {
      setState({
        ...prevState,
        loading: false,
        quote: '',
        author: '',
        error: error.message });

    });
  };

  return /*#__PURE__*/(
    React.createElement("div", null, /*#__PURE__*/
    React.createElement("div", { className: "quote-bg-container p-3 d-flex flex-column justify-content-center text-center" },

    state.loading ? /*#__PURE__*/
    React.createElement("div", { className: "text-center my-3" }, /*#__PURE__*/
    React.createElement("div", { className: "spinner-border", role: "status" }, /*#__PURE__*/
    React.createElement("span", { className: "visually-hidden" }))) :


    null, /*#__PURE__*/
    React.createElement("blockquote", { className: "blockquote" }, /*#__PURE__*/
    React.createElement("p", null, /*#__PURE__*/
    React.createElement("p", { className: "quote-text" }, state.quote)), /*#__PURE__*/

    React.createElement("footer", { id: "author", className: "blockquote-footer mt-4" }, state.author)), /*#__PURE__*/

    React.createElement("button", { className: "quote-button p-1 ml-auto mr-auto mt-2", onClick: fetchQuote }, "New Quote"))));



}

function UserAction() {
  const initialState = {
    displayJoke: false,
    displayQuote: false,
    displaySearchWiki: false,
    displayCountries: false,
    displayNumberFact: false };

  const [state, setState] = React.useState(initialState);

  const toggleDisplayJoke = e => {
    e.target.classList.toggle('btn-danger');
    setState({
      ...state,
      displayJoke: !state.displayJoke });


  };

  const toggleDisplaySearchWiki = e => {
    e.target.classList.toggle('btn-danger');
    setState({
      ...state,
      displaySearchWiki: !state.displaySearchWiki });

  };

  const toggleDisplayQuote = e => {
    e.target.classList.toggle('btn-danger');
    setState({
      ...state,
      displayQuote: !state.displayQuote });

  };

  const toggleDisplayCountries = e => {
    e.target.classList.toggle('btn-danger');
    setState({
      ...state,
      displayCountries: !state.displayCountries });

  };

  const toggleDisplayNumberFact = e => {
    e.target.classList.toggle('btn-danger');
    setState({
      ...state,
      displayNumberFact: !state.displayNumberFact });

  };

  return /*#__PURE__*/(
    React.createElement("div", { id: "UserAction" }, /*#__PURE__*/
    React.createElement("p", null, "Wanna try these utilities ? Click on them"), /*#__PURE__*/
    React.createElement("div", { className: "d-flex justify-content-center my-3" }, /*#__PURE__*/
    React.createElement("button", { className: "btn btn-primary mr-2", onClick: toggleDisplaySearchWiki }, "Search Wiki"), /*#__PURE__*/
    React.createElement("button", { className: "btn btn-primary mr-2", onClick: toggleDisplayJoke }, "Joke"), /*#__PURE__*/
    React.createElement("button", { className: "btn btn-primary mr-2", onClick: toggleDisplayNumberFact }, "Number Fact"), /*#__PURE__*/
    React.createElement("button", { className: "btn btn-primary mr-2", onClick: toggleDisplayQuote }, "Quote"), /*#__PURE__*/
    React.createElement("button", { className: "btn btn-primary mr-2", onClick: toggleDisplayCountries }, "Countries Population")),



    state.displaySearchWiki ? /*#__PURE__*/React.createElement(SearchWiki, null) : null,
    state.displayJoke ? /*#__PURE__*/React.createElement(Joke, null) : null,
    state.displayNumberFact ? /*#__PURE__*/React.createElement(NumberFact, null) : null,
    state.displayQuote ? /*#__PURE__*/React.createElement(Quote, null) : null,
    state.displayCountries ? /*#__PURE__*/React.createElement(Countries, null) : null));


}

function App() {
  const initialState = {
    username: 'Visitor' };

  const [state, setState] = React.useState(initialState);

  const collectUsername = username => {
    setState({
      username: username });

  };

  return /*#__PURE__*/(
    React.createElement("div", { id: "App" },
    !state.username ? /*#__PURE__*/
    React.createElement(UserInput, { collectUsername: collectUsername }) : /*#__PURE__*/
    React.createElement(React.Fragment, null, /*#__PURE__*/
    React.createElement(Greet, { username: state.username }), /*#__PURE__*/
    React.createElement(UserAction, null))));



}

ReactDOM.render( /*#__PURE__*/React.createElement(App, null), document.getElementById('root'));