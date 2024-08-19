/**
 * By Tushar Vishwakarma
 */
export default function Component() {
  return (
    <div className="container mx-auto px-4 py-12 md:px-6 lg:py-16">
      <div className="flex flex-col items-center space-y-8">
        <div className="text-center space-y-3">
          <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Badge Gallery</h1>
          <p className="max-w-[700px] text-muted-foreground md:text-xl">
            Earn badges for completing various milestones and tasks within our software.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          <div className="bg-background rounded-lg shadow-lg overflow-hidden">
            <div className="relative">
              <img
                src="/placeholder.svg"
                width={300}
                height={200}
                alt="Badge"
                className="w-full h-40 object-cover"
                style={{ aspectRatio: "300/200", objectFit: "cover" }}
              />
              <div className="absolute top-2 right-2 bg-primary rounded-full p-1">
                <StarIcon className="w-4 h-4 text-primary-foreground" />
              </div>
            </div>
            <div className="p-4 space-y-2">
              <h3 className="text-lg font-semibold">Onboarding Wizard</h3>
              <p className="text-muted-foreground">Complete the onboarding process to earn this badge.</p>
            </div>
          </div>
          <div className="bg-background rounded-lg shadow-lg overflow-hidden">
            <div className="relative">
              <img
                src="/placeholder.svg"
                width={300}
                height={200}
                alt="Badge"
                className="w-full h-40 object-cover"
                style={{ aspectRatio: "300/200", objectFit: "cover" }}
              />
              <div className="absolute top-2 right-2 bg-primary rounded-full p-1">
                <StarIcon className="w-4 h-4 text-primary-foreground" />
                <StarIcon className="w-4 h-4 text-primary-foreground" />
              </div>
            </div>
            <div className="p-4 space-y-2">
              <h3 className="text-lg font-semibold">Power User</h3>
              <p className="text-muted-foreground">Use the software for 100 hours to earn this badge.</p>
            </div>
          </div>
          <div className="bg-background rounded-lg shadow-lg overflow-hidden">
            <div className="relative">
              <img
                src="/placeholder.svg"
                width={300}
                height={200}
                alt="Badge"
                className="w-full h-40 object-cover"
                style={{ aspectRatio: "300/200", objectFit: "cover" }}
              />
              <div className="absolute top-2 right-2 bg-primary rounded-full p-1">
                <StarIcon className="w-4 h-4 text-primary-foreground" />
                <StarIcon className="w-4 h-4 text-primary-foreground" />
                <StarIcon className="w-4 h-4 text-primary-foreground" />
              </div>
            </div>
            <div className="p-4 space-y-2">
              <h3 className="text-lg font-semibold">Mastery</h3>
              <p className="text-muted-foreground">Achieve the highest level of proficiency in the software.</p>
            </div>
          </div>
          <div className="bg-background rounded-lg shadow-lg overflow-hidden">
            <div className="relative">
              <img
                src="/placeholder.svg"
                width={300}
                height={200}
                alt="Badge"
                className="w-full h-40 object-cover"
                style={{ aspectRatio: "300/200", objectFit: "cover" }}
              />
              <div className="absolute top-2 right-2 bg-primary rounded-full p-1">
                <GemIcon className="w-4 h-4 text-primary-foreground" />
              </div>
            </div>
            <div className="p-4 space-y-2">
              <h3 className="text-lg font-semibold">Rare Contributor</h3>
              <p className="text-muted-foreground">Contribute to the software in a unique and valuable way.</p>
            </div>
          </div>
          <div className="bg-background rounded-lg shadow-lg overflow-hidden">
            <div className="relative">
              <img
                src="/placeholder.svg"
                width={300}
                height={200}
                alt="Badge"
                className="w-full h-40 object-cover"
                style={{ aspectRatio: "300/200", objectFit: "cover" }}
              />
              <div className="absolute top-2 right-2 bg-primary rounded-full p-1">
                <GemIcon className="w-4 h-4 text-primary-foreground" />
                <GemIcon className="w-4 h-4 text-primary-foreground" />
              </div>
            </div>
            <div className="p-4 space-y-2">
              <h3 className="text-lg font-semibold">Legendary Achiever</h3>
              <p className="text-muted-foreground">Accomplish an extraordinary feat within the software.</p>
            </div>
          </div>
          <div className="bg-background rounded-lg shadow-lg overflow-hidden">
            <div className="relative">
              <img
                src="/placeholder.svg"
                width={300}
                height={200}
                alt="Badge"
                className="w-full h-40 object-cover"
                style={{ aspectRatio: "300/200", objectFit: "cover" }}
              />
              <div className="absolute top-2 right-2 bg-primary rounded-full p-1">
                <GemIcon className="w-4 h-4 text-primary-foreground" />
                <GemIcon className="w-4 h-4 text-primary-foreground" />
                <GemIcon className="w-4 h-4 text-primary-foreground" />
              </div>
            </div>
            <div className="p-4 space-y-2">
              <h3 className="text-lg font-semibold">Mythical Master</h3>
              <p className="text-muted-foreground">Achieve the highest level of mastery within the software.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

function GemIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M6 3h12l4 6-10 13L2 9Z" />
      <path d="M11 3 8 9l4 13 4-13-3-6" />
      <path d="M2 9h20" />
    </svg>
  )
}


function StarIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
    </svg>
  )
}
