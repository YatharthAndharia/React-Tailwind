export default function MenuList({ ulClassName, liClassname, aClassname }) {
  return (
    <ul className={ulClassName}>
      <li className={liClassname}>
        <a href="#" className={aClassname}>
          Home
        </a>
      </li>

      <li className={liClassname}>
        <a href="#" className={aClassname}>
          About Me
        </a>
      </li>

      <li className={liClassname}>
        <a href="#" className={aClassname}>
          Contact Me
        </a>
      </li>

      <li className={liClassname}>
        <a href="https://medium.com/me/stories/public" className={aClassname}>
          Blogs
        </a>
      </li>
    </ul>
  );
}
