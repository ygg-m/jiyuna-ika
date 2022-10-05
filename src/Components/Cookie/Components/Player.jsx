import { useEffect, useState, useFetch, jobs } from "../index";

export const Player = ({ player }) => {
  const [name, setName] = useState();
  const { id, job } = player;
  const [filteredJob, setFilteredJob] = useState([]);

  const [role, setRole] = useState();
  const [jobFullName, setJobFullName] = useState();
  const [jobLink, setJobLink] = useState();

  useEffect(() => {
    if (job.includes("blu")) {
      let lastIndex = jobs.length - 1;
      let bluFilter = jobs[lastIndex].filter((e) => e.tag === job);
      setFilteredJob(bluFilter);
    } else {
      let jobFilter = jobs.filter((e) => e.tag === job);
      setFilteredJob(jobFilter);
    }
  }, [player]);

  useEffect(() => {
    setRole(filteredJob[0]?.role);
    setJobFullName(filteredJob[0]?.name);
    setJobLink(filteredJob[0]?.name.toLowerCase().replace(/\s/g, ""));
  }, [filteredJob]);

  const { data } = useFetch(
    "http://na.finalfantasyxiv.com/lodestone/character/",
    id,
    ""
  );

  useEffect(() => {
    if (data) setName("undefined");
    else setName("");
  }, [data]);

  return (
    <div className={"player " + role}>
      <div className="img">
        <img
          src={"https://xivapi.com/cj/1/" + jobLink + ".png"}
          alt={jobFullName + " Icon"}
          className="img-fit"
        />
      </div>
      <p className="name">{name}</p>
    </div>
  );
};
