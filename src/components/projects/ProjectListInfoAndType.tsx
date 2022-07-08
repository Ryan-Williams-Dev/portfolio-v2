
export type Project = {
  title: string,
  imageLocation: string,
  description: string
}

type ProjectList = Project[]

export const projects: ProjectList = [
  { title: "Seek", 
    imageLocation: "/images/projects/seek/1.JPG", 
    description: "A google map street-view location guessing game"
  },
  { title: 'Scheduler',
    imageLocation: '/images/projects/scheduler/1.JPG',
    description: "A single page app build with React. Users can book, edit, and cancel appointments. Putting in their name and selecting an interviewer from the days available interviewers."  
  },
  { title: 'Decision Maker',
    imageLocation: '/images/projects/scheduler/1.JPG',
    description: "Deccccc"  
  },
  { title: 'Tweeter',
    imageLocation: '/images/projects/scheduler/1.JPG',
    description: "Twit twoo"  
  }
]