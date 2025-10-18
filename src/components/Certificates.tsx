import { Award, ExternalLink } from "lucide-react";
import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";

import analisis from "@/assets/cert-analisis.jpg";
import data from "@/assets/cert-data.jpg";
import gitandgithub from "@/assets/cert-IntroductiontoGitandGitHub.jpg";
import machinelearning from "@/assets/cert-MachineLearning.jpg";
import datacleaning from "@/assets/cert-ProcessDatafromDirtytoClean.jpg";

const Certificates = () => {
  const [selectedCert, setSelectedCert] = useState<{
    title: string;
    issuer: string;
    image: string;
    link: string;
  } | null>(null);

  const certificates = [
    {
      title: "Share Data Through the Art of Visualization",
      issuer: "Coursera",
      year: "2024",
      image: data,
      link: "https://coursera.org/verify/8PF9482HLNES",
    },
    {
      title: "Analyze Data to Answer Questions",
      issuer: "Coursera",
      year: "2024",
      image: analisis,
      link: "https://coursera.org/verify/AP98WV54FQPB",
    },
    {
      title: "Process Data from Dirty to Clean",
      issuer: "Coursera",
      year: "2024",
      image: datacleaning,
      link: "https://coursera.org/verify/RAT2529545V5",
    },
    {
      title: "Introduction to Git and GitHub",
      issuer: "Coursera",
      year: "2024",
      image: gitandgithub,
      link: "https://coursera.org/verify/WE6X624DHXEG",
    },
    {
      title: "Machine Learning",
      issuer: "Coursera",
      year: "2024",
      image: machinelearning,
      link: "https://coursera.org/verify/specialization/DZ4NG9ZNJPRP",
    },
  ];
  return (
    <>
      <section id="certificates" className="py-20 px-4 bg-card/30">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center">
            Professional <span className="gradient-text">Certificates</span>
          </h2>

          <div className="grid sm:grid-cols-2 lg:grid-cols-2 gap-6">
            {certificates.map((cert, index) => (
              <div key={index} className="glass-card rounded-lg overflow-hidden hover:border-primary/50 transition-all duration-300 group cursor-pointer" onClick={() => setSelectedCert(cert)}>
                <div className="relative overflow-hidden bg-card/50">
                  <img src={cert.image} alt={`${cert.title} certificate`} className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110" />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/90 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-4">
                    <span className="text-sm font-medium text-foreground">Click to view</span>
                  </div>
                </div>

                <div className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="p-3 rounded-lg bg-primary/10 flex-shrink-0 group-hover:bg-primary/20 transition-colors">
                      <Award className="h-6 w-6 text-primary" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-semibold mb-2 line-clamp-2 group-hover:text-primary transition-colors">{cert.title}</h3>
                      <p className="text-muted-foreground text-sm">{cert.issuer}</p>
                      <p className="text-primary text-sm font-medium mt-1">{cert.year}</p>
                      {cert.link && (
                        <a href={cert.link} target="_blank" rel="noopener noreferrer" onClick={(e) => e.stopPropagation()} className="inline-flex items-center gap-1 text-xs text-primary/70 hover:text-primary mt-2 transition-colors">
                          <ExternalLink className="h-3 w-3" />
                          Verify
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Dialog open={!!selectedCert} onOpenChange={() => setSelectedCert(null)}>
        <DialogContent className="max-w-3xl">
          <DialogHeader>
            <DialogTitle className="text-2xl">{selectedCert?.title}</DialogTitle>
          </DialogHeader>
          <div className="space-y-4">
            <img src={selectedCert?.image} alt={selectedCert?.title} className="w-full rounded-lg" />
            <div className="flex items-center justify-between pt-2">
              <div>
                <p className="text-muted-foreground">{selectedCert?.issuer}</p>
              </div>
              {selectedCert?.link && (
                <a href={selectedCert.link} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-sm text-primary hover:text-primary/80 transition-colors">
                  <ExternalLink className="h-4 w-4" />
                  Verify Certificate
                </a>
              )}
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default Certificates;
