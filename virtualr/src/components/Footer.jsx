import {
  resourcesLinks,
  platformLinks,
  communityLinks,
} from "../constants/constants";
const Footer = () => {
  return (
    <footer className="mt-20 border-t border-neutral-700 py-10">
      <div className=" grid grid-cols-2 lg:grid-cols-3 gap-4">
        <div>
          <h3 className="mb-4">Resources</h3>
          <ul className="flex flex-col tedxt  text-neutral-400">
            {resourcesLinks.map((resourcesLink, index) => (
              <a
                className="mb-2 hover:text-neutral-200"
                href={resourcesLink.href}
              >
                {resourcesLink.text}
              </a>
            ))}
          </ul>
        </div>
        <div>
          <h3 className="mb-4">Platform</h3>
          <ul className="flex flex-col tedxt  text-neutral-400">
            {platformLinks.map((platformLink, index) => (
              <a
                className="mb-2 hover:text-neutral-200"
                href={platformLink.href}
              >
                {platformLink.text}
              </a>
            ))}
          </ul>
        </div>
        <div>
          <h3 className="mb-4">Community</h3>
          <ul className="flex flex-col tedxt  text-neutral-400">
            {communityLinks.map((communitytLink, index) => (
              <a
                className="mb-2 hover:text-neutral-200"
                href={communitytLink.href}
              >
                {communitytLink.text}
              </a>
            ))}
          </ul>
        </div>
      </div>
      <h2 className="my-10 text-center italic tracking-wider">
        Developed by Gebremariam Kidane copy &copy; 2024{" "}
        <span>
          <a
            href="https://github.com/unique2721"
            target="_blank"
            title="Click here"
          >
            Github
          </a>
        </span>
      </h2>
    </footer>
  );
};

export default Footer;
