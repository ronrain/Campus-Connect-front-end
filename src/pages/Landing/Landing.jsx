// css
import styles from './Landing.module.css'

const Landing = ({ user }) => {
  return (
    <main className={styles.container}>
      <h1>Welcome to CampusConnect, {user ? user.name : 'friend'}</h1>
      <section className={styles.about}>
          <article>
            <p>
              In today's fast-paced educational landscape, colleges often overlook a goldmine right within their walls: the vast reservoir of talent, drive, and entrepreneurial spirit of their student body. Each student arrives with a unique blend of skills and passions, many of which can be transformed into valuable services that benefit their peers. However, without the right platform, these innate abilities often remain untapped, leaving students feeling isolated and undervalued in their academic communities.

              Enter CampusConnect - more than just a platform, it's a revolution in student empowerment.

              With CampusConnect, students can:
              <ul>
              Showcase Their Expertise: Whether it's tutoring in a challenging subject, graphic design, photography, or any unique talent, students can list their services, turning their passion into a marketable skill.
              </ul>
              <ul>
              Build a Reputation: As students offer their services, they build credibility, gather reviews, and establish themselves as trusted experts within their campus.
              </ul>
              <ul>
              Earn While They Learn: CampusConnect isn't just about skill-sharing; it's also an avenue for students to earn, helping them support their education and gain financial independence.
              </ul>
              <ul>
              Foster Connections: By providing services or availing them, students interact, breaking down barriers and creating a more interconnected and supportive college community.
              </ul>

              By bridging the gap between talent and opportunity, CampusConnect provides students with a platform to shine, thrive, and, most importantly, connect. It's not just about making money—it's about building a vibrant, entrepreneurial student community where everyone can flourish. Join us in redefining the college experience, making it richer, more inclusive, and infinitely more rewarding.
            </p>
          </article>
        </section>
    </main>
  )
}

export default Landing
