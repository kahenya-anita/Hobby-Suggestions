import { useState } from "react";
import {
  Star,
  Clock,
  Users,
  Zap,
  BookOpen,
  Camera,
  Lightbulb,
} from "lucide-react";

const HobbyExplorer = () => {
  const [selectedFilters, setSelectedFilters] = useState({
    energy: "low-medium",
    time: "30-60min",
    type: "all",
    social: "all",
  });

  const [expandedHobby, setExpandedHobby] = useState(null);

  const hobbies = [
    {
      id: 1,
      name: "Photography",
      icon: <Camera className="w-6 h-6" />,
      energy: "low-medium",
      time: "30-60min",
      type: "creative",
      social: "solo",
      interestFactor: 9,
      description: "Capture moments and develop an artistic eye",
      whyInteresting: "Great conversation starter, unique perspective on world",
      gettingStarted:
        "Start with phone photography, learn composition rules, try different subjects",
      skills: [
        "Visual composition",
        "Technical camera knowledge",
        "Post-processing",
      ],
      rejuvenating: "Mindful focus, exploring new places, creative expression",
      implementationSteps: [
        "Week 1: Start with phone camera, learn rule of thirds and leading lines",
        "Week 2: Practice daily photos focusing on composition",
        "Week 3: Learn basic editing (Lightroom mobile or free alternatives)",
        "Month 2: Join photography communities online, get feedback",
        "Month 3+: Consider upgrading camera, explore different photography styles",
      ],
      toolsNeeded: [
        "Camera (phone to start)",
        "Editing app",
        "Cloud storage",
        "Online communities",
      ],
      tips: [
        "Golden hour (sunrise/sunset) gives the best natural lighting",
        "Take multiple shots of same subject with different angles",
        "Focus on one photography rule at a time to improve",
        "Study photographers you admire and analyze their techniques",
      ],
    },
    {
      id: 2,
      name: "Language Learning",
      icon: <BookOpen className="w-6 h-6" />,
      energy: "low-medium",
      time: "20-45min",
      type: "intellectual",
      social: "solo",
      interestFactor: 9,
      description: "Become conversational in a new language",
      whyInteresting:
        "Opens doors globally, impressive skill, cultural insight",
      gettingStarted:
        "Choose language, use apps like Duolingo + conversation practice",
      skills: ["Pronunciation", "Grammar patterns", "Cultural communication"],
      rejuvenating:
        "Mental puzzle-solving, bite-sized daily progress, cultural exploration",
      implementationSteps: [
        "Week 1: Choose target language and download 2-3 learning apps",
        "Week 2: Complete beginner lessons daily (15-20 min)",
        "Week 3: Add flashcard app for vocabulary building",
        "Month 2: Find conversation partner or language exchange",
        "Month 3+: Start consuming native content (music, simple articles)",
      ],
      toolsNeeded: [
        "Language learning app",
        "Flashcard app",
        "Conversation partner platform",
      ],
      tips: [
        "Consistency beats intensity - 20 min daily is better than 2 hours weekly",
        "Focus on practical phrases you'll actually use",
        "Don't be afraid to make mistakes when speaking",
        "Immerse yourself with music and videos in target language",
      ],
    },
    {
      id: 3,
      name: "Cocktail Mixology",
      icon: <Star className="w-6 h-6" />,
      energy: "low-medium",
      time: "30-45min",
      type: "practical",
      social: "solo",
      interestFactor: 8,
      description: "Craft impressive cocktails and understand spirits",
      whyInteresting:
        "Great for entertaining, sophisticated skill, creative combinations",
      gettingStarted:
        "Get basic bar tools, learn 5 classic cocktails, understand spirit profiles",
      skills: [
        "Flavor balancing",
        "Technique precision",
        "Ingredient knowledge",
      ],
      rejuvenating:
        "Hands-on creativity, immediate enjoyment, social preparation",
      implementationSteps: [
        "Week 1: Buy basic bar tools (shaker, strainer, jigger, muddler)",
        "Week 2: Master 3 classic cocktails (Old Fashioned, Martini, Daiquiri)",
        "Week 3: Learn about different spirits and their characteristics",
        "Month 2: Experiment with creating your own variations",
        "Month 3+: Host cocktail nights for friends, expand repertoire",
      ],
      toolsNeeded: [
        "Bar tools set",
        "Quality spirits",
        "Fresh ingredients",
        "Recipe book",
      ],
      tips: [
        "Quality ingredients make a huge difference - use fresh citrus",
        "Measure precisely until you develop intuition for proportions",
        "Chill your glassware for better presentation",
        "Start with classics before creating original cocktails",
      ],
    },
    {
      id: 4,
      name: "Tech Community Event Organizing",
      icon: <Users className="w-6 h-6" />,
      energy: "high",
      time: "3-6hrs",
      type: "tech",
      social: "hosting",
      interestFactor: 9,
      description:
        "Organize meetups, conferences, and tech community gatherings",
      whyInteresting:
        "Industry leadership, massive networking, community impact",
      gettingStarted:
        "Start with small meetups, partner with local venues, use Meetup.com",
      skills: ["Event management", "Community building", "Public speaking"],
      rejuvenating:
        "Social energy, meaningful connections, leadership satisfaction",
      implementationSteps: [
        "Week 1: Research local tech communities and identify gaps",
        "Week 2: Create Meetup.com account and plan first event theme",
        "Week 3: Find venue (coffee shops, coworking spaces, libraries)",
        "Week 4: Promote event on social media and tech Slack channels",
        "Month 2+: Host first event, gather feedback, plan monthly series",
      ],
      toolsNeeded: [
        "Meetup.com account",
        "Social media presence",
        "Presentation slides",
        "Venue booking",
      ],
      tips: [
        "Start small with 10-15 people max for first event",
        "Partner with local coworking spaces for free venues",
        "Create recurring themes (JavaScript monthly, AI discussions)",
        "Always end with networking time and snacks",
      ],
    },
    {
      id: 5,
      name: "Code Review Practice",
      icon: <Lightbulb className="w-6 h-6" />,
      energy: "low",
      time: "20-45min",
      type: "tech",
      social: "solo",
      interestFactor: 7,
      description: "Review open source code to improve your analysis skills",
      whyInteresting:
        "Sharpen code quality eye, learn new patterns, help maintainers",
      gettingStarted:
        "Find GitHub repos with open PRs, start with familiar languages",
      skills: ["Code analysis", "Best practices", "Constructive feedback"],
      rejuvenating:
        "Focused analysis, learning from others, bite-sized contributions",
      implementationSteps: [
        "Day 1: Pick 2-3 GitHub repos in languages you know",
        "Week 1: Review 1 PR daily, focus on readability and logic",
        "Week 2: Start leaving constructive comments on PRs",
        "Month 2: Expand to reviewing in new programming languages",
        "Ongoing: Set daily goal of 1-2 PR reviews during breaks",
      ],
      toolsNeeded: [
        "GitHub account",
        "Code review checklist",
        "Browser bookmarks",
      ],
      tips: [
        "Start with small PRs (under 100 lines changed)",
        "Focus on one aspect per review (naming, logic, tests)",
        "Use GitHub's suggestion feature for specific improvements",
        "Always be constructive and kind in feedback",
      ],
    },
    {
      id: 6,
      name: "System Design Blog & Tutorials",
      icon: <BookOpen className="w-6 h-6" />,
      energy: "medium",
      time: "2-5hrs",
      type: "tech",
      social: "solo",
      interestFactor: 9,
      description: "Create in-depth system design content and case studies",
      whyInteresting:
        "Thought leadership, help other engineers, build personal brand",
      gettingStarted:
        "Analyze popular systems, create visual diagrams, share on Medium/Dev.to",
      skills: [
        "Technical writing",
        "System architecture",
        "Visual communication",
      ],
      rejuvenating:
        "Deep technical thinking, creative explanation, teaching satisfaction",
      implementationSteps: [
        "Week 1: Choose first system to analyze (Twitter, Uber, Netflix)",
        "Week 2: Research architecture, create detailed diagrams",
        "Week 3: Write comprehensive breakdown with trade-offs",
        "Week 4: Publish and promote on social media",
        "Ongoing: Create weekly system design content, build following",
      ],
      toolsNeeded: [
        "Diagramming tool",
        "Blogging platform",
        "Research resources",
      ],
      tips: [
        "Start with systems you understand well professionally",
        "Use visual diagrams to make complex concepts accessible",
        "Explain trade-offs and alternatives, not just the final design",
        "Engage with comments to build community around your content",
      ],
    },
    {
      id: 7,
      name: "Rock Climbing",
      icon: <Zap className="w-6 h-6" />,
      energy: "high",
      time: "2-4hrs",
      type: "adventure",
      social: "friends",
      interestFactor: 8,
      description: "Indoor/outdoor climbing for strength and mental focus",
      whyInteresting:
        "Impressive physical skill, mental toughness, adventure stories",
      gettingStarted:
        "Try indoor climbing gym, learn basic techniques, get proper gear",
      skills: ["Physical strength", "Problem-solving", "Risk assessment"],
      rejuvenating: "Physical challenge, mental focus, accomplishment high",
      implementationSteps: [
        "Week 1: Visit local climbing gym, take intro class",
        "Week 2: Go 2-3 times, focus on basic techniques and safety",
        "Week 3: Learn to belay, climb with partners",
        "Month 2: Get your own gear, try different route grades",
        "Month 3+: Consider outdoor climbing or advanced techniques",
      ],
      toolsNeeded: ["Climbing shoes", "Harness", "Chalk bag", "Gym membership"],
      tips: [
        "Start with top-rope climbing before trying lead climbing",
        "Focus on technique over strength - good climbers climb efficiently",
        "Watch other climbers and ask for advice - community is very welcoming",
        "Don't rush progression - build strength and confidence gradually",
      ],
    },
    {
      id: 8,
      name: "Themed Dinner Parties",
      icon: <Users className="w-6 h-6" />,
      energy: "high",
      time: "2-4hrs",
      type: "practical",
      social: "hosting",
      interestFactor: 9,
      description:
        "Host immersive dining experiences with themes and activities",
      whyInteresting:
        "Memorable experiences, cultural exploration, social leadership",
      gettingStarted:
        "Pick theme (Italian night, 1920s, etc), plan menu and decor, create playlist",
      skills: ["Event planning", "Culinary skills", "Social hosting"],
      rejuvenating: "Social connection, creative expression, shared joy",
      implementationSteps: [
        "Week 1: Choose first theme and date, create guest list",
        "Week 2: Plan menu with 3-4 themed dishes, shop for decorations",
        "Week 3: Prep what you can in advance, set up space",
        "Event day: Cook, decorate, host amazing evening",
        "Ongoing: Host monthly themed dinners, get creative with concepts",
      ],
      toolsNeeded: [
        "Cooking equipment",
        "Decorations",
        "Playlist",
        "Serving dishes",
      ],
      tips: [
        "Start with 4-6 guests for manageable first events",
        "Prep as much as possible in advance - timing is key",
        "Create immersive atmosphere with music, lighting, and decor",
        "Have backup simple dishes in case something goes wrong",
      ],
    },
    {
      id: 9,
      name: "Tech News Curation",
      icon: <BookOpen className="w-6 h-6" />,
      energy: "low",
      time: "20-45min",
      type: "tech",
      social: "solo",
      interestFactor: 6,
      description: "Curate and share weekly tech updates for your network",
      whyInteresting:
        "Stay current, build thought leadership, help others stay informed",
      gettingStarted:
        "Create weekly newsletter or social posts with key tech updates",
      skills: ["Information filtering", "Content curation", "Communication"],
      rejuvenating: "Light reading, pattern recognition, sharing knowledge",
      implementationSteps: [
        "Week 1: Set up RSS feeds from top tech sources (HackerNews, TechCrunch, etc)",
        "Week 2: Create simple template for weekly roundups",
        "Week 3: Start sharing on LinkedIn or personal blog",
        "Month 2: Build email list of colleagues who want updates",
        "Ongoing: Spend 15-20min daily collecting, 30min weekly writing",
      ],
      toolsNeeded: [
        "RSS reader (Feedly)",
        "Note-taking app",
        "Publishing platform",
      ],
      tips: [
        "Focus on 3-5 most important stories per week",
        "Add your own commentary, don't just share links",
        "Tag relevant people when sharing insights",
        "Create consistent posting schedule",
      ],
    },
    {
      id: 10,
      name: "Digital Journaling",
      icon: <BookOpen className="w-6 h-6" />,
      energy: "low",
      time: "20-30min",
      type: "creative",
      social: "solo",
      interestFactor: 6,
      description: "Reflective writing with digital tools and templates",
      whyInteresting:
        "Self-awareness, writing skills, creative expression, mental clarity",
      gettingStarted:
        "Choose journaling app, set daily reminder, start with simple prompts",
      skills: ["Reflective writing", "Self-awareness", "Digital organization"],
      rejuvenating: "Mental clarity, emotional processing, quiet reflection",
      implementationSteps: [
        "Day 1: Download journaling app (Journey, Day One, or Notion)",
        "Week 1: Write 5 minutes daily about your day",
        "Week 2: Add weekly reflection questions",
        "Month 2: Experiment with different formats (gratitude, goals, etc)",
        "Ongoing: Develop personal journaling rhythm and review past entries",
      ],
      toolsNeeded: ["Journaling app", "Smartphone/computer", "Writing prompts"],
      tips: [
        "Don't worry about grammar or perfect sentences",
        "Use voice-to-text when writing feels too slow",
        "Add photos to make entries more memorable",
        "Set a consistent time daily for best habit formation",
      ],
    },
  ];

  const filteredHobbies = hobbies.filter((hobby) => {
    if (
      selectedFilters.energy !== "all" &&
      hobby.energy !== selectedFilters.energy
    )
      return false;
    if (selectedFilters.time !== "all" && hobby.time !== selectedFilters.time)
      return false;
    if (selectedFilters.type !== "all" && hobby.type !== selectedFilters.type)
      return false;
    if (
      selectedFilters.social !== "all" &&
      hobby.social !== selectedFilters.social
    )
      return false;
    return true;
  });

  const toggleExpanded = (hobbyId) => {
    setExpandedHobby(expandedHobby === hobbyId ? null : hobbyId);
  };

  return (
    <div className="w-full min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="container mx-auto px-4 py-6 max-w-7xl">
        <h1 className="text-3xl font-bold text-gray-800 mb-2">
          Personal Hobby Explorer
        </h1>
        <p className="text-gray-600">
          Helps to develop Solo skills, activities to do with friends,
          adventures & my tech pursuits.
        </p>
      </div>

      {/* Filters */}
      <div className="bg-white rounded-lg shadow-md p-6 mb-6">
        <h2 className="text-xl font-semibold mb-4">Filter Your Options</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              <Zap className="inline w-4 h-4 mr-1" />
              Energy Level
            </label>
            <select
              value={selectedFilters.energy}
              onChange={(e) =>
                setSelectedFilters({
                  ...selectedFilters,
                  energy: e.target.value,
                })
              }
              className="w-full p-2 border rounded-md"
            >
              <option value="all">All Levels</option>
              <option value="low">Low (Relaxing)</option>
              <option value="low-medium">Low-Medium (Easy)</option>
              <option value="medium">Medium (Engaging)</option>
              <option value="high">High (Active)</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              <Clock className="inline w-4 h-4 mr-1" />
              Time Commitment
            </label>
            <select
              value={selectedFilters.time}
              onChange={(e) =>
                setSelectedFilters({ ...selectedFilters, time: e.target.value })
              }
              className="w-full p-2 border rounded-md"
            >
              <option value="all">Any Duration</option>
              <option value="20-30min">20-30 minutes</option>
              <option value="20-45min">20-45 minutes</option>
              <option value="30-45min">30-45 minutes</option>
              <option value="30-60min">30-60 minutes</option>
              <option value="2-4hrs">2-4 hours</option>
              <option value="2-5hrs">2-5 hours</option>
              <option value="3-6hrs">3-6 hours</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              <BookOpen className="inline w-4 h-4 mr-1" />
              Type
            </label>
            <select
              value={selectedFilters.type}
              onChange={(e) =>
                setSelectedFilters({ ...selectedFilters, type: e.target.value })
              }
              className="w-full p-2 border rounded-md"
            >
              <option value="all">All Types</option>
              <option value="creative">Creative</option>
              <option value="intellectual">Intellectual</option>
              <option value="practical">Practical</option>
              <option value="adventure">Adventure</option>
              <option value="tech">Tech</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              <Users className="inline w-4 h-4 mr-1" />
              Social Setting
            </label>
            <select
              value={selectedFilters.social}
              onChange={(e) =>
                setSelectedFilters({
                  ...selectedFilters,
                  social: e.target.value,
                })
              }
              className="w-full p-2 border rounded-md"
            >
              <option value="all">All Settings</option>
              <option value="solo">Solo Activities</option>
              <option value="hosting">Hosting Others</option>
              <option value="friends">With Friends</option>
            </select>
          </div>
        </div>
      </div>

      {/* Results */}
      <div className="space-y-4">
        <h2 className="text-xl font-semibold text-gray-800">
          Perfect Matches ({filteredHobbies.length} found)
        </h2>

        {filteredHobbies.map((hobby) => (
          <div
            key={hobby.id}
            className="bg-white rounded-lg shadow-md overflow-hidden"
          >
            <div
              className="p-6 cursor-pointer hover:bg-gray-50 transition-colors"
              onClick={() => toggleExpanded(hobby.id)}
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-4">
                  <div className="text-indigo-600">{hobby.icon}</div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-800">
                      {hobby.name}
                    </h3>
                    <p className="text-gray-600">{hobby.description}</p>
                  </div>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="flex">
                    {[...Array(hobby.interestFactor)].map((_, i) => (
                      <Star
                        key={i}
                        className="w-4 h-4 text-yellow-400 fill-current"
                      />
                    ))}
                  </div>
                  <span className="text-indigo-600 font-medium">
                    {expandedHobby === hobby.id ? "−" : "+"}
                  </span>
                </div>
              </div>
            </div>

            {expandedHobby === hobby.id && (
              <div className="px-6 pb-6 border-t bg-gray-50">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 pt-4">
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold text-gray-800 mb-2">
                        Why It Makes You Interesting
                      </h4>
                      <p className="text-gray-600 text-sm">
                        {hobby.whyInteresting}
                      </p>
                    </div>

                    <div>
                      <h4 className="font-semibold text-gray-800 mb-2">
                        How It Rejuvenates
                      </h4>
                      <p className="text-gray-600 text-sm">
                        {hobby.rejuvenating}
                      </p>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold text-gray-800 mb-2">
                        Getting Started
                      </h4>
                      <p className="text-gray-600 text-sm mb-2">
                        {hobby.gettingStarted}
                      </p>

                      {hobby.toolsNeeded && (
                        <div>
                          <h5 className="font-medium text-gray-700 mb-1 text-xs">
                            Tools Needed:
                          </h5>
                          <ul className="text-xs text-gray-600">
                            {hobby.toolsNeeded.map((tool, index) => (
                              <li key={index} className="flex items-center">
                                <span className="w-1 h-1 bg-gray-400 rounded-full mr-2"></span>
                                {tool}
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}
                    </div>

                    <div>
                      <h4 className="font-semibold text-gray-800 mb-2">
                        Skills You'll Develop
                      </h4>
                      <div className="flex flex-wrap gap-1">
                        {hobby.skills.map((skill, index) => (
                          <span
                            key={index}
                            className="bg-indigo-100 text-indigo-800 px-2 py-1 rounded-full text-xs"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="space-y-4">
                    {hobby.implementationSteps && (
                      <div>
                        <h4 className="font-semibold text-gray-800 mb-2">
                          Implementation Steps
                        </h4>
                        <div className="space-y-1">
                          {hobby.implementationSteps.map((step, index) => (
                            <div
                              key={index}
                              className="text-xs text-gray-600 flex items-start"
                            >
                              <span className="bg-indigo-500 text-white rounded-full w-4 h-4 flex items-center justify-center text-xs mr-2 mt-0.5 flex-shrink-0">
                                {index + 1}
                              </span>
                              <span>{step}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}

                    {hobby.tips && (
                      <div>
                        <h4 className="font-semibold text-gray-800 mb-2">
                          Pro Tips
                        </h4>
                        <div className="space-y-1">
                          {hobby.tips.map((tip, index) => (
                            <div
                              key={index}
                              className="text-xs text-gray-600 flex items-start"
                            >
                              <span className="text-yellow-500 mr-1">💡</span>
                              <span>{tip}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>

      {filteredHobbies.length === 0 && (
        <div className="text-center py-8">
          <p className="text-gray-600">
            No hobbies match your current filters. Try adjusting them above!
          </p>
        </div>
      )}
    </div>
  );
};

export default HobbyExplorer;
