import styles from './Homepage.module.css'

const Homepage = (props: any) => {

    return (
        <div className={styles.homepage}>
            <div className={styles['homepage-top']}></div>
            <div className={styles['homepage-bottom']}>
            SimpleLifeBalancing
            </div>
        </div>
    )
}

export default Homepage;