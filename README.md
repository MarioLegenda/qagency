## SETUP

There are two ways to setup this project; via your host system with 
webpack or with docker. If you choose to setup with webpack, required
version of node is 16.

### SETTING UP WITH WEBPACK

``yarn install``

``yarn serve``

And that is it. webpack should open your default browser and run
the application.

### SETTING UP WITH DOCKER

``docker-compose up``

Your application should now be available on `http://localhost:9000`.

### Code explanation

I believe that most of the code is self explanatory. SCSS is split into
different sections and it should be easy to figure out what is used
where. Where that is not the case, I added comments. All the requirements
are done, including optional. I hope I did it well.

#### Layout 

I decided right away to not create any layouts. Default behaviour
where block elements are stacked one below the other was just fine.

#### HTML

I splitted HTML into multiple files (sections) so it would be easier
for you to examine the code. The only problem I had was with the mobile
navigation. 

The first solution required to create a hidden checkbox that, when checked,
would show the mobile nav. But that solution proved to be very hard to
implement since mobile nav would have to be sibling of this checkbox in
order to reach it with css. I personally, never liked these solutions 
so I used javascript for that use. 

#### Javascript

I used something like model/view/controller design pattern with seamless
integration with caching but not all views need a cache or a model . 
I cached into local storage. 

For posts caching, I used a specialized class that uses an
abstraction over local storage but for user cache, I used a simple
`withCache` function that wraps around a http call. This function 
can be used for any type of cache that uses a single entry key.
For example, if the value you want to cache can be stored with its
own key, this function will work with everything. 

Also, loading users is done separately from loading posts. That is to
say, users do not wait for posts to be rendered in DOM. That makes
them lazy loaded and they do not block the event loop or DOM rendering
for posts.

I also added loading indicator and error handling with currying since
I had time to do it. 