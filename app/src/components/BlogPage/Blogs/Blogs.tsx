import React, { Fragment } from "react";
import styles from "./Blogs.module.css";
import BlogItem from "./BlogItem";

function Blogs() {
  const Blog_LIST = [
    {
      id: "p1",
      title: "Break the frame",
      description: `In order to have any significant change in your life, you need a place and time to connect yourself. Create yourself space and separate it from your current frame. Allow yourself to think. Allow yourself to grow into the strongest version of yourself.
      •	Rat race, Paying bills, Boss expectations, etc
      •	Friends, Weekly hangouts, Friend’s birthday, Society expectations, etc
      •	School, exams, test, assignments, teacher expectations, etc.
      •	Dysfunctional family, BF/ GF issues, elderly to take care, family expectations, etc
      We are so busy “living” in the frame, but never question it.
      Disclosure: If you are currently happy with your current frame and not constantly complaining about your situation, then keep doing what you are doing. It’s all about achieving this peace of mind.
      “What can you do today to make the best out of your current situation?”
      “Life is about recreating yourself.”
      Everyday, you make a decision. Whether you passively maintain your current state or take a step closer to the stronger version of yourself, you made a decision and will keep making decision consciously or unconsciously. 
      The first step to a successful life is awareness. 
      “Your reality is what you believe.”
      Some people, because of the lifestyle they chose are massively restrained to what they can do. Because of where they are born, responsibility, society expectations, decision, fear, laziness, etc. 
      But I am lucky. I can be whoever I want to be. I can do whatever I want to do. Go where I want to go. Because of my personality, because I consciously choose who I am, I can do things that other people can’t do or can’t allow themselves to do. 
      And this is powerful. This is a position of freedom. 
      Move out from your old frame and allow yourself to decide more for yourself.
      You can do it too, if you really desire it at the bottom of your heart.
      Just focus on a few keys things, balance your life. It’s better to be slow but confident than very fast but fragile.
      “Life is about recreating yourself.”
      Different ways to break the frame:
      The idea here is creating a distance from your current frame. Disconnect from the “current you”. Distance from your thoughts, to-do list, people around you, social media, external influence, stress, etc. Creating some space to connect with your soul. Ask yourself the question you have been holding and take the time to answer them.
      (1) Easy to do: Low commitment, low reward.
      •	Go for an 1h walk without destination on mind.
      •	1h Gym with your earbuds plug-in
      •	Full day in a new environment (Morning to Night)
      •	Hiking, Cycling,
      •	Walk on the beach
      (2) Life changing: High commitment, High reward
      •	Study abroad in another country (Dream country)
      •	New environment, exciting, new people, fun, new language, challenges
      •	Move out from your parents’ place
      •	Freedom of thoughts, no family pressure, independent, no curfew, you make your own decision,
      •	Work in another city
      •	Same as study abroad, everything is new. And working environment is another experience.
      “When you are in a place where no one knows you, you can recreate yourself without resistance.”
      (3) Failure: Failure is good because it shocks you. All your life until now, you thought you were doing the right thing, then, BAM! Life hits you hard. It’s something unpredictable, so I prefer the (1) and (2) options which are more “active”. Something you have control on. Nevertheless, life will shake you. And you should take this opportunity to connect with yourself.
      •	Failed an exam/ test/ entrance exam
      •	Break up with BF/GF
      •	Family breakdown, deceased,
      •	Burnout from work
      •	Change home/ city/ country due to living circumstances.
      Quotes:
      “It is never too late to be what you might have been. » – George Eliot
      “What are you willing to risk to get what truly matters to you ?”
      (Comment below)
      More Quotes: 
      “Make money work for you. Don’t be a slave of money.”
      “Anything you do out of a sense of obligation is going to have a different outcome than when you act out of a sense of opportunity. » – follow passion
      “Every seconds you spend thinking about what somebody else has is taking away from time that you could create something for yourself.” – Gary vee
      “Imagination is a weapon. Those who lack it are first to die.”- Goblin slayer 
      « My actions are also the shape of my dream. »- iida boku no hero akademia
      “Investing is an activity in which consumption today is foregone in an attempt to allow greater consumption at a later date. ‘Risk’ is the possibility that this objective won’t be attained.” – Warren E. Buffet
      “To know who you really are, you must step outside of the world you already know.” – Food Wars!
      `,
    //   image: require("../../../Images/GreenListin1.png"),
      language: "==",
    },
    {
      id: "p2",
      title: "Shoppies",
      description:
        "An application that helps manage movie nominations for the upcoming Shoppies event. The search results come from OMDB's API (free API key: http://www.omdbapi.com/apikey.aspx).",
    //   image: require("../../../Images/Shoppies.png"),
      language: "== HTML/CSS - Javascript - React ==",
    },
    {
      id: "p3",
      title: "Food Order",
      description:
        "A food orders web-based application that allows end-users to place orders and review the invoice.",
    //   image: require("../../../Images/Food_Order.png"),
      language: "== HTML/CSS - Javascript - React ==",
    },
    {
      id: "p4",
      title: "CRM",
      description:
        "Customer Relationship Management - A web application built with Django that enables businesses to manage customer interactions, monitor sales and marketing blogs, and streamline customer communication.",
    //   image: require("../../../Images/CRM_customer_relationship_management.png"),
      language: "== Python - Django - HTML ==",
    },
    {
      id: "p5",
      title: "GoPiGo3_42", 
      description:
        "A generic library that implements a software framework - State Machine design, which can be used to integrate into GoPiGo3 robot's tasks.",
    //   image: require("../../../Images/GoPiGo3_42.jpg"),
      language: "== Python ==",
    },
    {
      id: "p6",
      title: "Dalek",
      description:
        "Turn based survival game on the terminal where you have to move the player to avoid colliding with enemies.",
    //   image: require("../../../Images/dalek.jpg"),
      language: "== Python ==",
    },
    {
      id: "p7",
      title: "Android 97 Cartes",
      description:
        "Card game on mobile where you have to empty the deck of cards by placing them on the game table in ascending and descending order.",
    //   image: require("../../../Images/97_cartes.jpg"),
      language: "== Java - Android Studio ==",
    },
    {
      id: "p8",
      title: "Parking Meter",
      description:
        "Simulation of a parking meter with downtown Montreal time restriction and pricing.",
    //   image: require("../../../Images/parking_meter.png"),
      language: "== Java ==",
    },
    {
      id: "p9",
      title: "Party Like No Tomorrow",
      description:
        "2D platform game where you have to bring the player to an end point without coming into contact with enemies.",
    //   image: require("../../../Images/2_party.png"),
      language: "== C# - Unity ==",
    },
  ];

  const blogList = Blog_LIST.map((blog) => (
    <BlogItem
      key={blog.id}
      id={blog.id}
      title={blog.title}
      description={blog.description}
      language={blog.language}
    //   image={blog.image}
    ></BlogItem>
  ));

  return (
    <Fragment>
      <div className={styles.styles}>{blogList}</div>
    </Fragment>
  );
};

export default Blogs;