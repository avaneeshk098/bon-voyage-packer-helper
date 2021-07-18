# **Nimbus Packing Manager (NPM)**

## **Inspiration (🔥 or ❄️)**
Has it ever happened that you are packing for a trip and you checked the weather? This is done by many, however, most weather websites show just the air temperature. What this means is that it does not take into consideration factors like humidity, wind speed, etc. This is one of the major reasons why 18°C in Bangalore may seem colder than 18°C in London.


**This can cause major issues when packing clothes for a vacation like packing warm clothes for actually cold regions. So, I came up with an application which can help better suggest which clothes to take for your next vacation!** 

## **What it does ⚙️**
To overcome the problem of variation of actual temperature as compared to air temperature. There is a metric used known as [Feels Like Temperature](https://cumuluswiki.org/a/Feels_Like). It considers the various factors which are often missed out by normal air temperature.


For this application, I used the [OpenWeatherMap API](https://openweathermap.org) to fetch the feels like temperature of the user destination. The user inputs his/her wardrobe and then by using our sorting algorithm we provide the most appropriate thickness of cloth in the best order of likeness just with one click. 

## **How we built it 🧑‍💻**

The Nimbus Packing Manager (NPM) was built using the [Next.js framework](https://nextjs.org).

## **Challenges we ran into 🧗**

The most challenging task was to figure out how the problem of difference in weather could be overcome. Considering the problem involved knowledge in the field of geography and climate, which I am not very well versed in this process was slightly harder as it involved learning concepts related to the weather metrics and understanding, how they work. 


**Finally, after almost two hours of research, I somehow understood the concept of Feels Like temperature and luckily found an API that serves the purpose for the same.**

## **Accomplishments that we're proud of 🏆**

- **Worked with Next.js for a single-page application! ⚛️**

I have worked in Next.js  before, however, this was the first time that I not only made an API request to an external API but also, used that data, processed it, cleaned it, and presented it to a user simple UI.

- **Joined the most diverse community of hackers! 🧑‍💻**

After INIT 2022, I was all pumped up to take part in my first 48-hour hackathon. Despite all the pressure to build fast. I got a chance to take advice from other members of my guild and interact with a whole new community. The constant rush of finishing the project was overcome by the fun of enjoying the hackathon along with a great community of developers!


## **What we learned 📚**

- **Building Next.js Apps ⚛️**
  
Next.js is an open-source development framework built on top of [Node.js](https://nodejs.org/en/) enabling [React](https://reactjs.org) based web applications functionalities such as server-side rendering and generating static websites. While I don't use Next.js majorly for my projects, this hackathon gave me an opportunity to explore Next.js and improve my speed of development.

- **Understood about weather and climate 🌍**

As this project is majorly based on geography and climate, it was a learning experience and gave me a throwback to geography class 😁. I don't tend to research on topics, however, for this project I researched extensively to build an app that can be used in real-world scenarios.

## **What's next for Nimbus Packing Manager (NPM) ⏭**

While this app performs basic functions like wardrobe input and selection, there are scopes for improvement.

- **Allow users to click pictures of their clothes and use AI to pair them better 👕 🩳**

Presently, the app can provide pairings based on user preference, however, at times there are certain features of clothing that can be odd like color or design. So, one scope would be to allow them to click pictures of the clothing and then use an AI to generate the best-looking pairs of clothes.

- **Add suggestions for accessories ⛱ 🕶 👒**

While traveling, we pack not only clothes but also accessories for easy use. As of now, the app can't suggest those. So, to overcome the app should aim to provide suggestions like umbrellas (if the precipitation chance is high), sunglasses, or hats (if the temperature is high). These micro items will help improve the user's travel experience. 

- **Improve suggestions for traditional dresses**

Currently, the app accepts formal values like shirts, pants, etc. However, to cater to a diverse community, I aim to improve the recognition for various traditional dresses.