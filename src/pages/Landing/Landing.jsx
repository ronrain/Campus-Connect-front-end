// css
import styles from './Landing.module.css'
import logo from '../../assets/logo.png'

const Landing = ({ user }) => {
  return (
    <main className={styles.container}>
      <h1>Welcome to CampusConnect, {user ? user.name : 'friend'}</h1>
      <section className={styles.logoLanding}>
        <img src={logo} alt="CampusConnectLogo" />
      </section>
      <section className={styles.about}>
        <header>
          <h3>ABOUT US</h3>
          <h1>What is Campus Connect</h1>
        </header>
        <article>
          <p>
            Welcome to Campus Connect the premier marketplace tailored for students, by students.

            Born from the vision of creating a close-knit student community that thrives on collaboration, we recognized the vast pool of talent and skills that exist within campuses across the USA. Why look far when the service you need is just a dorm room away?

            Whether you're an artist looking to showcase your work, a tech genius fixing gadgets, a tutor with knowledge to share, or even someone with a knack for assembling furniture Campus Connect is your platform to offer and discover a diverse range of services, right within your campus walls.

            Our mission? To empower students to leverage their unique abilities, foster connections, and support one another through commerce. Every transaction you make supports a fellow student's passion, funds a dream, or simply helps make college life a bit more manageable.

            So, if you're keen on transforming the way you view your campus community, join us in making Campus Connect the heartbeat of student enterprise in the USA. Together, let's redefine what it means to be a student entrepreneur!
          </p>
        </article>
      </section>

      <section className={styles.about}>
        <header>
          <h3>WHO WE ARE</h3>
          <h1>The Team</h1>
        </header>
        <article>
          <p>
            Say hello to the brains behind Campus Connect - a dedicated group of students just like you, united by a shared passion for technology and innovation.

            We're not just your average tech enthusiasts. Each of us embarked on this journey driven by the belief that every student holds a unique potential that deserves a platform. With countless hours spent coding in dorm rooms, brainstorming in coffee shops, and fine-tuning our platform on library benches, we've transformed our tech-savvy aspirations into a reality.

            Beyond our love for all things digital, we're bound together by a vision: to see students across the USA collaborating, thriving, and realizing their entrepreneurial spirit. It's more than just a platform for us it's a movement. A movement that empowers, supports, and celebrates the incredible tapestry of talents and services that every campus offers.

            So, when you're navigating through Campus Connect, remember you're not just using a platform, you're experiencing the culmination of countless sleepless nights, fueled by caffeine and passion, all dedicated to elevating the student experience.

            Here's to breaking boundaries, to innovation, and to students everywhere - from our team to yours. Welcome to the future of campus enterprise!
          </p>
        </article>
      </section>


      <footer className={styles.footer}>
        <p>© 2022 CAMPUS CONNECT INC. RIGHTS RESERVED</p>
      </footer>
    </main>
  )
}

export default Landing
