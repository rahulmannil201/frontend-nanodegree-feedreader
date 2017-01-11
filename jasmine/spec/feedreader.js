/* feedreader.js
 *
 * This is the spec file that Jasmine will read and contains
 * all of the tests that will be run against your application.
 */

/* We're placing all of our tests within the $() function,
 * since some of these tests may require DOM elements. We want
 * to ensure they don't run until the DOM is ready.
 */
$(function() {
    /* This is our first test suite - a test suite just contains
    * a related set of tests. This suite is all about the RSS
    * feeds definitions, the allFeeds variable in our application.
    */
    describe('RSS Feeds', function() {
        /* This  test is  to make sure that the
         * allFeeds variable has been defined and that it is not
         * empty.
         */
        it('are defined', function() {
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);
        });


        /*loops through each feed
         * in the allFeeds object and ensures it has a URL defined
         * and that the URL is not empty.
         */
         it(' URL is defined', function() {
            allFeeds.forEach(function(feed){
            expect(feed.url).toBeDefined();
            expect(feed.url.length).not.toBe(0);
        });
        });


         /* loops through each feed
         * in the allFeeds object and ensures it has a name defined
         * and that the name is not empty.


         */

         it(' Name is defined', function() {
            allFeeds.forEach(function(feed){
            expect(feed.name).toBeDefined();
            expect(feed.name.length).not.toBe(0);
        });
        });





           });









    /* new test suite named "The menu" */
    describe('The menu', function() {


         /* this test that ensures the menu element is
         * hidden by default and it is in menu-hidden class
         *
         */
         var hiddenmenu =  $("body").hasClass("menu-hidden");

         it('Menu element is hidden', function() {
        expect(hiddenmenu).toBe(true);
    });



          /* this test that ensures the menu changes
          * visibility when the menu icon is clicked. This test
          * should have two expectations: does the menu display when
          * clicked and does it hide when clicked again.
          */
          it('visibility changes when menu icon is clicked', function () {
             $('.menu-icon-link').click();
             expect($('body').hasClass('menu-hidden')).toEqual(false);
             $('.menu-icon-link').click();
             expect($('body').hasClass('menu-hidden')).toEqual(true);



          });




             });







    /* new test suite named "Initial Entries" */
    describe('Initial Entries', function() {



         /*
         * Remember, loadFeed() is asynchronous function
         data needs to loaded before testing
         for that we use done() function
         */

         beforeEach(function (done) {
            loadFeed(0, function () {
                done();
            });
        });

        /* this test that ensures when the loadFeed
         * function is called and completes its work, there is at least
         * a single .entry element within the .feed container.
         */


         it('feed container contains atleast 1 entry after function is called', function (done) {

            expect($('.feed .entry').length).toBeGreaterThan(0);
            done();

    });
     });








    /* a new test suite named "New Feed Selection"*/
    describe('New Feed Selection', function() {

         //intially loaded feed
         var firstfeed;




          beforeEach(function (done) {
            /*This test ensures that the new feed is loaded in the html*/
            loadFeed(0, function () {
                firstfeed = $('.feed').html();
                loadFeed(1, done);
            });
        });


          /* this test ensures when a new feed is loaded
         * by the loadFeed function that the content actually changes.
         *

         */

        it('is loaded by the loadfeed function and the content actually changes', function(done) {
            expect($('.feed').html()).not.toEqual(firstfeed);
            done();
        });

     });
     });






