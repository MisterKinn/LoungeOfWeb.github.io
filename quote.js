const quotes = [
    {
    quote: "Close your eyes. Focus on making yourself feel excited, powerful. Imagine yourself destroying goals with ease.",
    author: "Andrew Tate",
    },
    {
    quote: "Find a person who is as successful as you'd like to be, ask them what to do, do it and work hard.",
    author: "Andrew Tate",
    },
    {
    quote:"The temporary satisfaction of quitting is outweighed by the eternal suffering of being a nobody.",
    author: "Andrew Tate",
    },
    {
    quote:"Your mind must be stronger than your feelings.",
    author: "Andrew Tate",
    },
    {
    quote:"Absolutely every single one of my actions is intentional. Divine purpose. If your day is full of mindless action, you act without thought.",
    author: "Andrew Tate",
    },
    {
    quote:"Success is always stressful.",
    author: "Andrew Tate",
    },
    {
    quote:"Freedom will only come when you no longer trade your time for money.",
    author: "Andrew Tate",
    },
    {
    quote:"Cost is the enemy of the poor man, so the poor try to save money. Time is the enemy of the rich man, so the rich try to save time.",
    author: "Andrew Tate",
    },
    {
    quote:"You must put in the effort to get the life you want.",
    author: "Andrew Tate",
    },
    {
        quote:"You are exactly where you deserve to be. Change who you are and you will change how you live.",
        author: "Andrew Tate",
    },
    {
        quote:"Arrogance breeds complacency and complacency breeds failure.",
        author: "Andrew Tate",
    },
    {
        quote:"Do the impossible and you'll never doubt yourself ever again.",
        author: "Andrew Tate",
    },
    {
        quote:"The internet is the new battleground of earth, the wild west, the place of truth and opportunity.",
        author: "Andrew Tate",
    },
    {
        quote:"Arrogance is the cause of most first world poverty.",
        author: "Andrew Tate",
    },
    {
        quote:"Today you can act as an amateur or you can be a professional. Decide what you will do right now.",
        author: "Andrew Tate",
    },
    {
        quote:"Emotional control isn't a lack of emotion; it's a necessary function of maturity.",
        author: "Andrew Tate",
    },
    {
        quote:"High standards protect you from low-quality experiences.",
        author: "Andrew Tate",
    },
    {
        quote:"Aspire to be a superhero. Not a normal person with a bigger house and nicer car.",
        author: "Andrew Tate",
    },
    {
        quote:"Intellect is nothing without energy. Ideas are nothing without energy. High energy people win.",
        author: "Andrew Tate",
    },
    {
        quote:"The man who goes to the gym every single day regardless of how he feels will always beat the man who goes to the gym when he feels like going to the gym.",
        author: "Andrew Tate",
    },
    {
        quote:"There is no joy without pain.",
        author: "Andrew Tate",
    },
    {
        quote:"The amount of stress you can tolerate while remaining effective is directly correlated to the level of success you will enjoy.",
        author: "Andrew Tate",
    },
    {
        quote:"Reject weakness in any form.",
        author: "Andrew Tate",
    },
    {
        quote:"You can become rich, you can become strong, you can take care of your loved ones and enjoy the fact it will be very difficult.",
        author: "Andrew Tate",
    },
    {
        quote:"No exceptional person ever lived like an average person.",
        author: "Andrew Tate",
    },
    {
        quote:"If failure makes you stronger, you can never lose.",
        author: "Andrew Tate",
    },
    {
        quote:"The harder you work, the more important you become.",
        author: "Andrew Tate",
    },
    {
        quote:"Show me a man with one friend and I;ll see a man who's honest.",
        author: "Andrew Tate",
    },
    {
        quote:"Don't listen to the advice of people who are living lives you don't want to live.",
        author: "Andrew Tate",
    },
    {
        quote:"You are never going to have any of the things you want if you do not get them yourself. Nobody cares about you enough to do it for you.",
        author: "Andrew Tate",
    },
    {
        quote:"Focus on what's best for yourself.",
        author: "Andrew Tate",
    },
    {
        quote:"My biggest victories in life were when I was sad.",
        author: "Andrew Tate",
    },
    {
        quote:"Alays win because I genuinely can't take losing.",
        author: "Andrew Tate",
    },
    {
        quote:"The faster you work, the more work you get done.",
        author: "Andrew Tate",
    },
    {
        quote:"Your only option to level up is to begin talking to winners.",
        author: "Andrew Tate",
    },
    {
        quote:"There is no light without dark. There is no joy without pain.",
        author: "Andrew Tate",
    },
    {
        quote:"A man without a vision for his future always returns to his past.",
        author: "Andrew Tate",
    },
    {
        quote:"Searching for my favorite feeling has built me an exceptional life.",
        author: "Andrew Tate",
    },
    {
        quote:"Stress tolerance is the best indicator of a person’s likelihood of success.",
        author: "Andrew Tate",
    },
    {
        quote:"Adversity builds men. It is your duty to challenge yourself and craft your own world.",
        author: "Andrew Tate",
    },
];

const quote = document.querySelector(".quote-title");
const author = document.querySelector(".quote-person");
const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

author.innerText = todaysQuote.author;
quote.innerText = todaysQuote.quote;