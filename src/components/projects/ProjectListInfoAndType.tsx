export type Project = {
  title: string;
  imageLocation: string;
  description: string;
};

type ProjectList = Project[];

export const projects: ProjectList = [
  {
    title: "Seek",
    imageLocation: "/images/projects/seek/1.JPG",
    description: "A google map street-view location guessing game",
  },
  {
    title: "Scheduler",
    imageLocation: "/images/projects/scheduler/1.JPG",
    description:
      "A single page app build with React. Users can book, edit, and cancel appointments. Putting in their name and selecting an interviewer from the days available interviewers.",
  },
  {
    title: "Decision Maker",
    imageLocation: "/images/projects/decision-maker/1.JPG",
    description: "The Decision Maker is an app that allows users to create a question and collect votes from their friends. When the user creates their poll, they are sent an email with links to a voting page and a results page. Every time someone votes on their poll they are notified by email. The results page displays the options in order of the most poplular rankings.",
  },
  {
    title: "Tweeter",
    imageLocation: "/images/projects/tweeter/1.JPG",
    description: "A simple single page app. Using jQuery, HTML5, AJAX, and CSS3. The purpose of this project was to make a basic Twitter clone, to practice using CSS styling and clint side scripting to make a dynamic single page app, utilising AJAX http requests.",
  },
];
