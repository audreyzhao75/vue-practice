const helloWorld = new Vue({
    el: '#helloVue',
    data: {
        title: "Hello world!",
        message: "My first Vue template!"
    }
});

const example = new Vue({
    el: '#example',
    data: {
        title: "Hi there",
        message: "Look at my cute pet!",
        name: "Audrey",
        img: {
            src: 'https://placeimg.com/200/200/animals',
            alt: 'A placeholder image of animals'
        }
    }
});

// -------

const book = new Vue({
    el: '#book',
    data: {
        title: "The Sirens of Titan",
        author: "Kurt Vonnegut",
        summary: "This is the summary",
        showDetail: false
    },
    methods: {
        // sayHello: function() {
        //     alert("Hello, this book is " + this.title );
        // }
        toggleDetails: function() {
            this.showDetail = !this.showDetail;
        }
    }
});

// -------

const colorsOfTheRainbow = [
    "red", "orange", "yellow", "green", "blue", "indigo", "violet"];
const plusOneRainbow = [
    "orange", "yellow", "green", "blue", "indigo", "violet", "red"];

new Vue({
    el: "#colors",
    data: {
        rainbow: colorsOfTheRainbow,
        plusOne: plusOneRainbow
    }
});

// -------

const media = [
    {
        title: "Title",
        description: "Description",
        type: "Book",
        contributor: "Author 1",
        showDetail: false
    },
    {
        title: "Title",
        description: "Description",
        type: "DVD",
        contributor: "Author 2",
        showDetail: false
    },
    {
        title: "Title",
        description: "Description",
        type: "DVD",
        contributor: "",
        showDetail: false
    },
    {
        title: "Title",
        description: "Description",
        type: "Book",
        contributor: "Author 3",
        showDetail: false
    },
    {
        title: "Title",
        description: "Description",
        type: "e-book",
        contributor: "Author 1",
        showDetail: false
    },
    {
        title: "Title",
        description: "Description",
        type: "Streaming Video",
        contributor: "Author 2",
        showDetail: false
    }
];

const app = new Vue({
    el: "#media-list",
    data: {
        title: "Treehouse Public Library",
        mediaList: media,
        type: ""
    },
    methods: {
        toggleDetails: function(media) {
            media.showDetail = !media.showDetail;
        },
        filterList: function() {
            // event is auto passed in by Vue
            this.type = event.target.value;
        }
    },
    computed: {
        uniqueItemsList: function() {
            const types = [];
            this.mediaList.forEach((item) => {
                if(!types.includes(item.type)) {
                    types.push(item.type);
                }
            });
            return types;
        }
    }
});
