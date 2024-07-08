Harmonic Bytes Project Documentation

Project Description
Harmonic Bytes is designed to enhance the visibility and engagement of musicians on TikTok by providing a data-driven content strategy. The project leverages AI to generate an 8-week content plan tailored to the artist's audience and trends, with the goal of increasing discoverability and maximizing engagement on the platform.

Features and Functionality

Enhanced Exposure: Utilize data-driven strategies to boost the visibility of new and upcoming artists on TikTok.
Maximized Engagement: Improve engagement rates through personalized content recommendations and optimized posting schedules.
Trend Analysis: Identify and leverage trending topics, hashtags, and challenges to create viral content.
Audience Insights: Provide detailed analytics and insights about audience demographics and behavior to tailor content effectively.
Content Performance Tracking: Monitor and analyze the performance of posted content to continuously improve strategies.
Collaboration Opportunities: Identify potential collaboration opportunities with influencers and other artists to expand reach.
Real-time Recommendations: Offer real-time content creation and posting recommendations based on current trends and audience activity.
Development Tools Used

Python: Core development language used for backend processing and AI model integration.
JavaScript, CSS, HTML: Used for building the frontend interface and user interactions.
Google Cloud Platform (GCP): For hosting the application and integrating various cloud services.
Vertex AI: For building, deploying, and managing the AI models used in the project.
APIs Used

TikTok API (in the future, currently used synthetically created data): To pull personalized metrics and data for analysis.
Google Cloud APIs: For various cloud-based operations and data processing.

Assets Used
Viral Artist Database: A library of 100 fake viral artist profiles to simulate and analyze audience engagement.
Ex: 
Artist	Genre	Age	Gender	Location	Followers	Key Strategy	Listener Age Distribution	Gender Ratio (M/F/NB)	Top Locations (%)
Artist 1	Pop	21	Female	USA	2M	Dance challenges, trends	13-17 (40%), 18-24 (35%), 25-34 (15%), 35+ (10%)	30/65/5	USA (50%), UK (15%), Canada (10%), Australia (5%), Others (20%)

User Database: A library of 100 fake user profiles to simulate and analyze audience engagement.
Ex:
User	Genre	Age	Gender	Audience Age Distribution	Gender Ratio	Top Locations	Average Views	Average Likes	Average Shares	Average Comments
Oliver	Pop	20	Female	13-17, 18-24	40% Male, 55% Female, 5% Non-binary	USA, UK, Canada	10000	500	50	20

Content Strategies Database: A collection of 300 different content strategies to provide diverse and effective recommendations arranged in a set of eight weeks each.
Ex:
Sl. No	Content Type	Description	Goal	Key Metrics	Set	Week
1	Music Video Teaser	Short teaser of an upcoming music video	Build anticipation for the release	Views, likes, shares, comments	Set 1	Week 1
2	Behind-the-Scenes	Clips showing the making of the music video	Increase engagement and personal connection	Views, engagement rate	Set 1	Week 2
3	Trend Challenge	Create a challenge based on a trending topic or song	Increase visibility and engagement	Participation rate, shares	Set 1	Week 3
4	Fan Interaction	Live Q&A session with fans	Strengthen fan community	Live viewers, comments, shares	Set 1	Week 4
5	Collaboration Video	Video featuring a duet or collaboration with another influencer	Reach new audiences and gain followers	Views, likes, new followers	Set 1	Week 5
6	User-Generated Content	Share and react to content created by fans	Foster a sense of community	Engagement rate, shares, comments	Set 1	Week 6
7	Music Release	Full release of the new music video with a call to action to share	Maximize reach and engagement	Views, likes, shares, comments	Set 1	Week 7
8	Analytics Review	Review performance data from the past 7 weeks	Assess strategy effectiveness and make adjustments	Follower growth, engagement rate	Set 1	Week 8

Libraries Used
Flask: For building the web application and API endpoints.
Pandas: For data manipulation and analysis.
Scikit-learn: For machine learning model development.
Numpy: For numerical computations.
FPDF: For generating PDF reports.
Problem Statement
The primary problem addressed by Harmonic Bytes is the challenge musicians face in gaining visibility and engagement on TikTok. By analyzing audience metrics and leveraging trending topics, the project aims to provide personalized content strategies that enhance an artist's reach and interaction on the platform.


Instructions to Execute the Project

Setup Google Cloud Project

Ensure you have a Google Cloud account and create a new project.
Enable the necessary APIs (Vertex AI, Cloud Functions, etc.).
Deploy the Agent

Upload the exported agent ZIP file to Google Cloud Storage.
Import the agent into Vertex AI.
Run the Application

Install Node.js and npm:
Ensure you have Node.js and npm installed. You can download and install them from Node.js.

Navigate to the Project Directory:

Open your terminal and navigate to the root directory of your project.
cd path/to/your/project

Install Dependencies:
Run the following command to install all necessary dependencies.
npm install

Start the Development Server:
Once the dependencies are installed, start the development server.
npm start

Open the Application:
Open your browser and go to http://localhost:3000 to view the application.

