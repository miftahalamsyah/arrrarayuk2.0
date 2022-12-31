import type { NextPage } from "next";
import { IJobs, Months } from "../typings";
import linkedin from "../assets/linkedin.webp";
import www from "../assets/www.webp";

interface IJobsProps {
  jobs: IJobs[];
}

export const Jobs: NextPage<IJobsProps> = ({ jobs }) => {
  return (
    <>
      <h1 className="jobs_heading">Indikator</h1>
      <div className="jobs_timeline_container">
          <div className="job">
            <h3>3.8.1 Menjelaskan array satu dimensi</h3>
          </div>
          <div className="job">
              <h3>3.8.2 Menjelaskan array multidimensi</h3>
          </div>
          <div className="job">
              <h3>3.8.3 Mengidentifikasi konsep array satu dimensi</h3>
          </div>
          <div className="job">
              <h3>3.8.4 Mengidentifikasi konsep array multidimensi</h3>
          </div>
      </div>
    </>
  );
};
