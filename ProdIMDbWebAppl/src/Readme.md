###### Routes
so anything inside routes get reaplced with actual routed comp?
Yes, that's exactly right. You can think of the <Routes> component as a controller that exclusively renders the content of a single <Route> that matches the current URL.

Here’s a simple breakdown:

The
<Routes> block listens for URL changes.** When the URL changes (e.g., a user clicks a <Link>), the <Routes> component re-evaluates its children.
2. It finds the best matching <Route>. It looks through all the <Route> elements nested inside it and finds the one whose path prop best matches the current URL.
3. It renders only that one component. Once it finds a match, it renders the component you provided in the element prop for that specific <Route>. All other <Route> components inside the <Routes> block are ignored.

This is why any component you want to be visible on every page, like a Header, Footer, or a navigation sidebar, must be placed outside of the <Routes> block. That way, they are rendered independently and are not swapped out when the route change