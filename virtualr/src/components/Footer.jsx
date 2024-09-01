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
          <ul className="flex flex-col tedxt  text-neutral-300">
            {resourcesLinks.map((resourcesLink, index) => (
              <a className="mb-2" href={resourcesLink.href}>
                {resourcesLink.text}
              </a>
            ))}
          </ul>
        </div>
        <div>
          <h3 className="mb-4">Platform</h3>
          <ul className="flex flex-col tedxt  text-neutral-300">
            {platformLinks.map((platformLink, index) => (
              <a className="mb-2" href={platformLink.href}>
                {platformLink.text}
              </a>
            ))}
          </ul>
        </div>
        <div>
          <h3 className="mb-4">Community</h3>
          <ul className="flex flex-col tedxt  text-neutral-300">
            {communityLinks.map((communitytLink, index) => (
              <a className="mb-2" href={communitytLink.href}>
                {communitytLink.text}
              </a>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
