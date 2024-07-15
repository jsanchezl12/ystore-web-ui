import styles from './Hero.module.sass';
export const Hero = () => {
  console.log(styles);
  return (
    <section className={styles.Hero}>
      <h1>YStore</h1>
      <h2>Los articulos del mañana</h2>
    </section>
  );
};