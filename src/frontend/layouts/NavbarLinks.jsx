
const links = [
  { link: "About Me", section: "about" },
  { link: "Skills", section: "skills" },
  { link: "Experience", section: "experience" },
  { link: "Contact", section: "contact" },
];

const NavbarLinks = () => {
    return (
      <nav>
        <div style={{ display: 'flex', gap: '20px' }}>
          {links.map((item, index) => (
            <a key={index} href={`#${item.section}`} style={{ textDecoration: 'none' }}>
              {item.link}
            </a>
          ))}
        </div>
      </nav>
    );
  };
  
  export default NavbarLinks;