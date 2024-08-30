import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

const splitSql = (sql: string) => {
  return sql.split(';').filter(content => content.trim() !== '')
}

async function main() {
  const sql = `

INSERT INTO "User" ("id", "email", "name", "pictureUrl", "tokenInvitation", "status", "password") VALUES ('4c62aa80-b6a7-45ce-a32b-544a70100d25', '1Bernita.Wyman65@yahoo.com', 'John Doe', 'https://i.imgur.com/YfJQV5z.png?id=3', 'inv12345', 'active', '$2b$10$ppubsZypHzkqW9dkhMB97ul2.wSsvaCoDE2CzqIHygddRMKXvpYUC');
INSERT INTO "User" ("id", "email", "name", "pictureUrl", "tokenInvitation", "status", "password") VALUES ('a8c83f11-dd81-4ccd-ab46-c089991061bb', '8Carmen.Wiegand32@yahoo.com', 'Jane Smith', 'https://i.imgur.com/YfJQV5z.png?id=10', 'inv78901', 'pending', '$2b$10$ppubsZypHzkqW9dkhMB97ul2.wSsvaCoDE2CzqIHygddRMKXvpYUC');
INSERT INTO "User" ("id", "email", "name", "pictureUrl", "tokenInvitation", "status", "password") VALUES ('6b80403f-169f-4790-b741-931e69bc53cf', '15Janice.Bogan69@yahoo.com', 'Michael Brown', 'https://i.imgur.com/YfJQV5z.png?id=17', 'inv11223', 'deleted', '$2b$10$ppubsZypHzkqW9dkhMB97ul2.wSsvaCoDE2CzqIHygddRMKXvpYUC');
INSERT INTO "User" ("id", "email", "name", "pictureUrl", "tokenInvitation", "status", "password") VALUES ('434f291e-c15d-4161-a549-4427e42d1cd0', '22Armand61@yahoo.com', 'David Wilson', 'https://i.imgur.com/YfJQV5z.png?id=24', 'inv11223', 'deleted', '$2b$10$ppubsZypHzkqW9dkhMB97ul2.wSsvaCoDE2CzqIHygddRMKXvpYUC');
INSERT INTO "User" ("id", "email", "name", "pictureUrl", "tokenInvitation", "status", "password") VALUES ('a5d7731a-c4c0-4e68-a2e2-7b1d48004888', '29Reed20@yahoo.com', 'David Wilson', 'https://i.imgur.com/YfJQV5z.png?id=31', 'inv12345', 'suspended', '$2b$10$ppubsZypHzkqW9dkhMB97ul2.wSsvaCoDE2CzqIHygddRMKXvpYUC');
INSERT INTO "User" ("id", "email", "name", "pictureUrl", "tokenInvitation", "status", "password") VALUES ('cb8dc4ed-b82b-44ea-a458-41423b22bacd', '36Amelia.Marquardt51@hotmail.com', 'John Doe', 'https://i.imgur.com/YfJQV5z.png?id=38', 'inv11223', 'suspended', '$2b$10$ppubsZypHzkqW9dkhMB97ul2.wSsvaCoDE2CzqIHygddRMKXvpYUC');
INSERT INTO "User" ("id", "email", "name", "pictureUrl", "tokenInvitation", "status", "password") VALUES ('36f831aa-6d71-4e37-8e27-b066cb682d72', '50Kailyn_Wuckert-Crooks@yahoo.com', 'David Wilson', 'https://i.imgur.com/YfJQV5z.png?id=52', 'inv44556', 'suspended', '$2b$10$ppubsZypHzkqW9dkhMB97ul2.wSsvaCoDE2CzqIHygddRMKXvpYUC');
INSERT INTO "User" ("id", "email", "name", "pictureUrl", "tokenInvitation", "status", "password") VALUES ('9a2fd90d-d9aa-406c-a57c-92635a80ee7a', '57Lillie_Jerde11@yahoo.com', 'Michael Brown', 'https://i.imgur.com/YfJQV5z.png?id=59', 'inv78901', 'active', '$2b$10$ppubsZypHzkqW9dkhMB97ul2.wSsvaCoDE2CzqIHygddRMKXvpYUC');
INSERT INTO "User" ("id", "email", "name", "pictureUrl", "tokenInvitation", "status", "password") VALUES ('e25d72ea-fbb7-4b05-a962-a5800316c94a', '64Yasmine.OConnell99@yahoo.com', 'Emily Jones', 'https://i.imgur.com/YfJQV5z.png?id=66', 'inv11223', 'inactive', '$2b$10$ppubsZypHzkqW9dkhMB97ul2.wSsvaCoDE2CzqIHygddRMKXvpYUC');

INSERT INTO "PostData" ("id", "title", "content", "datePublished", "userId") VALUES ('285e3a05-b849-410a-8172-dbe8816b3e9f', '10 Tips for a Healthier Lifestyle', 'Traveling doesnt have to break the bank. Discover some of the best budgetfriendly destinations around the world and tips on how to save money while exploring new places.', '2025-08-18T01:38:40.861Z', 'e25d72ea-fbb7-4b05-a962-a5800316c94a');
INSERT INTO "PostData" ("id", "title", "content", "datePublished", "userId") VALUES ('e7811467-c0f6-4566-aa86-82c47bd45ab0', 'Exploring the Wonders of the Universe', 'The universe is vast and full of mysteries. In this post we delve into some of the most fascinating aspects of space exploration and what scientists have discovered so far.', '2024-09-20T06:09:27.115Z', '36f831aa-6d71-4e37-8e27-b066cb682d72');
INSERT INTO "PostData" ("id", "title", "content", "datePublished", "userId") VALUES ('b49b3b1c-dca7-49e2-81ac-8182bd4d7e91', '10 Tips for a Healthier Lifestyle', 'Traveling doesnt have to break the bank. Discover some of the best budgetfriendly destinations around the world and tips on how to save money while exploring new places.', '2024-06-11T13:37:57.289Z', '21a857f1-ba5f-4435-bcf6-f910ec07c0dc');
INSERT INTO "PostData" ("id", "title", "content", "datePublished", "userId") VALUES ('1580494b-21e0-4e5e-8ac7-ce0db53f769e', 'Traveling on a Budget Top Destinations', 'Cooking at home can be a rewarding experience. This guide covers everything from basic techniques to advanced recipes that will impress your friends and family.', '2025-02-16T00:59:16.522Z', '4c62aa80-b6a7-45ce-a32b-544a70100d25');
INSERT INTO "PostData" ("id", "title", "content", "datePublished", "userId") VALUES ('517fdc58-5831-40f0-bfd4-b063e722a7f2', 'How to Boost Your Productivity', 'Traveling doesnt have to break the bank. Discover some of the best budgetfriendly destinations around the world and tips on how to save money while exploring new places.', '2024-05-25T13:56:07.310Z', '36f831aa-6d71-4e37-8e27-b066cb682d72');
INSERT INTO "PostData" ("id", "title", "content", "datePublished", "userId") VALUES ('486aa42f-e1f8-4f25-b23f-1292375e5423', 'The Ultimate Guide to Cooking at Home', 'Productivity is key to achieving your goals. Learn how to manage your time effectively set realistic targets and stay motivated throughout your journey.', '2025-02-27T13:29:00.663Z', 'cb8dc4ed-b82b-44ea-a458-41423b22bacd');
INSERT INTO "PostData" ("id", "title", "content", "datePublished", "userId") VALUES ('a714f633-79fa-44ac-bb6f-e5f86efc2a72', 'Exploring the Wonders of the Universe', 'Living a healthier lifestyle doesnt have to be difficult. Here are 10 simple tips that can help you improve your overall wellbeing and lead a happier life.', '2025-03-25T02:47:01.147Z', '6b80403f-169f-4790-b741-931e69bc53cf');
INSERT INTO "PostData" ("id", "title", "content", "datePublished", "userId") VALUES ('180d1eea-7d29-49a6-9c59-f357f3ee6cb7', 'Exploring the Wonders of the Universe', 'Cooking at home can be a rewarding experience. This guide covers everything from basic techniques to advanced recipes that will impress your friends and family.', '2024-06-17T03:51:02.255Z', '6b80403f-169f-4790-b741-931e69bc53cf');
INSERT INTO "PostData" ("id", "title", "content", "datePublished", "userId") VALUES ('f2b3d4ff-4c91-402f-9128-4f7f876e9a8a', '10 Tips for a Healthier Lifestyle', 'Living a healthier lifestyle doesnt have to be difficult. Here are 10 simple tips that can help you improve your overall wellbeing and lead a happier life.', '2025-08-16T14:46:52.206Z', '9a2fd90d-d9aa-406c-a57c-92635a80ee7a');
INSERT INTO "PostData" ("id", "title", "content", "datePublished", "userId") VALUES ('00d0457d-7c2c-4900-884a-ea45c916c787', '10 Tips for a Healthier Lifestyle', 'Living a healthier lifestyle doesnt have to be difficult. Here are 10 simple tips that can help you improve your overall wellbeing and lead a happier life.', '2025-06-25T09:27:07.803Z', '21a857f1-ba5f-4435-bcf6-f910ec07c0dc');

INSERT INTO "Comment" ("id", "content", "postId", "userId") VALUES ('b65bdb8e-ed34-415c-a3de-2dafd90030bd', 'Can you add more details about your projects', '517fdc58-5831-40f0-bfd4-b063e722a7f2', '36f831aa-6d71-4e37-8e27-b066cb682d72');
INSERT INTO "Comment" ("id", "content", "postId", "userId") VALUES ('b4fbf24b-f308-4547-8ffb-3019589e3460', 'This is a fantastic website Keep up the great work.', 'e7811467-c0f6-4566-aa86-82c47bd45ab0', '6b80403f-169f-4790-b741-931e69bc53cf');
INSERT INTO "Comment" ("id", "content", "postId", "userId") VALUES ('65de1c59-4f46-4615-aba1-ef3ac28ea15c', 'Can you add more details about your projects', '486aa42f-e1f8-4f25-b23f-1292375e5423', '4c62aa80-b6a7-45ce-a32b-544a70100d25');
INSERT INTO "Comment" ("id", "content", "postId", "userId") VALUES ('ad4a018b-9aec-4d94-a2bd-cc1c4928cff6', 'This is a fantastic website Keep up the great work.', '00d0457d-7c2c-4900-884a-ea45c916c787', 'a8c83f11-dd81-4ccd-ab46-c089991061bb');
INSERT INTO "Comment" ("id", "content", "postId", "userId") VALUES ('2671d270-be45-4d10-bcdc-045753f7954a', 'The design of this site is really impressive.', '180d1eea-7d29-49a6-9c59-f357f3ee6cb7', '4c62aa80-b6a7-45ce-a32b-544a70100d25');
INSERT INTO "Comment" ("id", "content", "postId", "userId") VALUES ('21ad0851-b219-4ed4-a3d9-f49d6b5e2e58', 'This is a fantastic website Keep up the great work.', '1580494b-21e0-4e5e-8ac7-ce0db53f769e', '36f831aa-6d71-4e37-8e27-b066cb682d72');
INSERT INTO "Comment" ("id", "content", "postId", "userId") VALUES ('b3d38bbb-b46b-4616-952b-ee5fb1a0af35', 'This is a fantastic website Keep up the great work.', 'f2b3d4ff-4c91-402f-9128-4f7f876e9a8a', 'cb8dc4ed-b82b-44ea-a458-41423b22bacd');
INSERT INTO "Comment" ("id", "content", "postId", "userId") VALUES ('cfb2e8ee-5ecb-403d-b047-a547affba4ba', 'Can you add more details about your projects', 'e7811467-c0f6-4566-aa86-82c47bd45ab0', 'a5d7731a-c4c0-4e68-a2e2-7b1d48004888');
INSERT INTO "Comment" ("id", "content", "postId", "userId") VALUES ('53ce8b6a-1cc0-4c5e-af7d-c14738b1e28c', 'The design of this site is really impressive.', 'f2b3d4ff-4c91-402f-9128-4f7f876e9a8a', '21a857f1-ba5f-4435-bcf6-f910ec07c0dc');
INSERT INTO "Comment" ("id", "content", "postId", "userId") VALUES ('87c8e67f-601e-4a77-b400-d3587ebf2aba', 'Can you add more details about your projects', 'e7811467-c0f6-4566-aa86-82c47bd45ab0', 'cb8dc4ed-b82b-44ea-a458-41423b22bacd');

INSERT INTO "Category" ("id", "name") VALUES ('66cd5963-c6cb-4707-9e07-082267725bca', 'Fitness');
INSERT INTO "Category" ("id", "name") VALUES ('dcc4dd65-8216-4d49-bf38-429eaaeb7427', 'Travel');
INSERT INTO "Category" ("id", "name") VALUES ('f7f95874-8be1-44e7-96fd-80e1cd7b4067', 'Lifestyle');
INSERT INTO "Category" ("id", "name") VALUES ('fdeae13c-2902-4eaf-b5f5-089a58392d55', 'Lifestyle');
INSERT INTO "Category" ("id", "name") VALUES ('2177cd6a-df94-4d4f-8ecc-92c7b34b4195', 'Fitness');
INSERT INTO "Category" ("id", "name") VALUES ('4dbd2cf5-9b8c-434a-92aa-f65e0f3fab51', 'Technology');
INSERT INTO "Category" ("id", "name") VALUES ('1870e458-61f5-4508-96a6-45614eb4038e', 'Technology');
INSERT INTO "Category" ("id", "name") VALUES ('e9c524e2-f8cc-404b-9bdb-e1ed9c017db5', 'Lifestyle');
INSERT INTO "Category" ("id", "name") VALUES ('7b5568cb-5281-43bd-bc2e-39f56beedca3', 'Lifestyle');
INSERT INTO "Category" ("id", "name") VALUES ('b20c259d-ba7e-44b3-a06a-3f67c6b78eaa', 'Food');

INSERT INTO "PostCategory" ("postId", "categoryId", "id") VALUES ('517fdc58-5831-40f0-bfd4-b063e722a7f2', 'e9c524e2-f8cc-404b-9bdb-e1ed9c017db5', '5ee7728a-6c3a-4af0-b37f-b63f84547174');
INSERT INTO "PostCategory" ("postId", "categoryId", "id") VALUES ('f2b3d4ff-4c91-402f-9128-4f7f876e9a8a', 'dcc4dd65-8216-4d49-bf38-429eaaeb7427', 'd6d70510-0e66-4287-b0cf-1d1bd8292aa8');
INSERT INTO "PostCategory" ("postId", "categoryId", "id") VALUES ('486aa42f-e1f8-4f25-b23f-1292375e5423', 'e9c524e2-f8cc-404b-9bdb-e1ed9c017db5', '0005cbc3-5ab5-4e22-9521-6bdc476fc82e');
INSERT INTO "PostCategory" ("postId", "categoryId", "id") VALUES ('00d0457d-7c2c-4900-884a-ea45c916c787', 'fdeae13c-2902-4eaf-b5f5-089a58392d55', 'c1195372-8a1e-490e-bd55-dc8aea8aaf7a');
INSERT INTO "PostCategory" ("postId", "categoryId", "id") VALUES ('a714f633-79fa-44ac-bb6f-e5f86efc2a72', 'e9c524e2-f8cc-404b-9bdb-e1ed9c017db5', '19585f26-ba9e-49da-bf34-bb0c10bd6b16');
INSERT INTO "PostCategory" ("postId", "categoryId", "id") VALUES ('f2b3d4ff-4c91-402f-9128-4f7f876e9a8a', '66cd5963-c6cb-4707-9e07-082267725bca', '9d708517-9f33-4306-894a-38318a5fdb57');
INSERT INTO "PostCategory" ("postId", "categoryId", "id") VALUES ('b49b3b1c-dca7-49e2-81ac-8182bd4d7e91', 'e9c524e2-f8cc-404b-9bdb-e1ed9c017db5', '1e938e0f-8011-4a9e-822e-97ba5c7cda5f');
INSERT INTO "PostCategory" ("postId", "categoryId", "id") VALUES ('486aa42f-e1f8-4f25-b23f-1292375e5423', 'e9c524e2-f8cc-404b-9bdb-e1ed9c017db5', '60bdec34-ccc1-44a3-882b-9e2334b950c1');
INSERT INTO "PostCategory" ("postId", "categoryId", "id") VALUES ('180d1eea-7d29-49a6-9c59-f357f3ee6cb7', '7b5568cb-5281-43bd-bc2e-39f56beedca3', '96288269-34fb-4587-9053-e9fe70782a86');
INSERT INTO "PostCategory" ("postId", "categoryId", "id") VALUES ('00d0457d-7c2c-4900-884a-ea45c916c787', 'b20c259d-ba7e-44b3-a06a-3f67c6b78eaa', '6eee8e0d-f444-4594-9efd-ac59d1eb1f5c');

INSERT INTO "Project" ("id", "title", "description", "link", "userId") VALUES ('9cd7b7d1-756c-4337-a70f-a884088c9684', 'Tech Innovations', 'Explore my creative projects and professional achievements.', 'httpswww.mycreativespace.com', 'cb8dc4ed-b82b-44ea-a458-41423b22bacd');
INSERT INTO "Project" ("id", "title", "description", "link", "userId") VALUES ('ce208cff-0e0e-4a9d-975b-865d917db8dd', 'Tech Innovations', 'A showcase of my latest web development projects and design work.', 'httpswww.techinnovations.com', '6b80403f-169f-4790-b741-931e69bc53cf');
INSERT INTO "Project" ("id", "title", "description", "link", "userId") VALUES ('2f70db47-8c10-4c72-856c-8da8b672a9e0', 'Personal Portfolio', 'Innovative tech projects and experiments in web development and design.', 'httpswww.mycreativespace.com', '9a2fd90d-d9aa-406c-a57c-92635a80ee7a');
INSERT INTO "Project" ("id", "title", "description", "link", "userId") VALUES ('d2afad73-4288-47bf-af2e-c7965d4d497e', 'My Creative Space', 'Explore my creative projects and professional achievements.', 'httpswww.mycreativespace.com', '434f291e-c15d-4161-a549-4427e42d1cd0');
INSERT INTO "Project" ("id", "title", "description", "link", "userId") VALUES ('f71e78f2-918d-485c-a61a-dc96e535172c', 'Personal Portfolio', 'A hub for my design and development projects featuring case studies and insights.', 'httpswww.designhub.com', '4c62aa80-b6a7-45ce-a32b-544a70100d25');
INSERT INTO "Project" ("id", "title", "description", "link", "userId") VALUES ('12e3d687-d243-464f-9943-1f130d6e13e0', 'Tech Innovations', 'Explore my creative projects and professional achievements.', 'httpswww.techinnovations.com', '6b80403f-169f-4790-b741-931e69bc53cf');
INSERT INTO "Project" ("id", "title", "description", "link", "userId") VALUES ('c5d78c93-454b-4dc6-9f06-38415a038c77', 'John Does Projects', 'A collection of projects demonstrating my skills in coding and design.', 'httpswww.personalportfolio.com', 'a8c83f11-dd81-4ccd-ab46-c089991061bb');
INSERT INTO "Project" ("id", "title", "description", "link", "userId") VALUES ('83149cfb-91f3-434c-a9a0-6034e5132498', 'My Creative Space', 'Innovative tech projects and experiments in web development and design.', 'httpswww.designhub.com', '6b80403f-169f-4790-b741-931e69bc53cf');
INSERT INTO "Project" ("id", "title", "description", "link", "userId") VALUES ('9a80776f-c5de-4097-9c30-c3897690ec94', 'Design  Development Hub', 'Innovative tech projects and experiments in web development and design.', 'httpswww.mycreativespace.com', '434f291e-c15d-4161-a549-4427e42d1cd0');
INSERT INTO "Project" ("id", "title", "description", "link", "userId") VALUES ('7ad75b7e-0375-422d-8668-5cf3d76a51ee', 'Personal Portfolio', 'Explore my creative projects and professional achievements.', 'httpswww.mycreativespace.com', '21a857f1-ba5f-4435-bcf6-f910ec07c0dc');

INSERT INTO "Skill" ("id", "name") VALUES ('489ffa81-2cb5-42a8-9b0d-26aa9ffd93c2', 'Project Management');
INSERT INTO "Skill" ("id", "name") VALUES ('b090691a-6b10-4c82-b8b4-a490a8d81952', 'Project Management');
INSERT INTO "Skill" ("id", "name") VALUES ('b0e495eb-624b-4d8b-a1df-d7c2c211fb97', 'Graphic Design');
INSERT INTO "Skill" ("id", "name") VALUES ('bc65edda-6d59-4657-9eef-607749bc1f51', 'JavaScript');
INSERT INTO "Skill" ("id", "name") VALUES ('ea6e12ca-4906-4a0d-a3bd-fa8b9a075b8e', 'Project Management');
INSERT INTO "Skill" ("id", "name") VALUES ('4b6373e2-6b19-4255-937a-092224a1a0c6', 'Graphic Design');
INSERT INTO "Skill" ("id", "name") VALUES ('56e7e35f-333c-4ad5-b8f7-451e9b6696ef', 'JavaScript');
INSERT INTO "Skill" ("id", "name") VALUES ('57d00c04-4177-4b55-bcb9-8ec9b389baee', 'Graphic Design');
INSERT INTO "Skill" ("id", "name") VALUES ('a852191f-b2fc-4520-9561-c71d6518ba7a', 'Project Management');
INSERT INTO "Skill" ("id", "name") VALUES ('b4066dac-1653-403a-ab20-11f76e351f6b', 'Project Management');

INSERT INTO "UserSkill" ("userId", "skillId", "id") VALUES ('4c62aa80-b6a7-45ce-a32b-544a70100d25', 'b090691a-6b10-4c82-b8b4-a490a8d81952', 'd1aa47a9-7f20-4287-8774-11b553191a11');
INSERT INTO "UserSkill" ("userId", "skillId", "id") VALUES ('434f291e-c15d-4161-a549-4427e42d1cd0', 'a852191f-b2fc-4520-9561-c71d6518ba7a', '8727a15b-de10-4eac-8f4f-ca02e60568c7');
INSERT INTO "UserSkill" ("userId", "skillId", "id") VALUES ('4c62aa80-b6a7-45ce-a32b-544a70100d25', 'b0e495eb-624b-4d8b-a1df-d7c2c211fb97', '0f9da616-16b0-4366-b36c-aad8ab6c7b9c');
INSERT INTO "UserSkill" ("userId", "skillId", "id") VALUES ('cb8dc4ed-b82b-44ea-a458-41423b22bacd', 'b090691a-6b10-4c82-b8b4-a490a8d81952', '607c7f10-959b-4532-84fe-aa6fc341ba78');
INSERT INTO "UserSkill" ("userId", "skillId", "id") VALUES ('a5d7731a-c4c0-4e68-a2e2-7b1d48004888', 'ea6e12ca-4906-4a0d-a3bd-fa8b9a075b8e', '8574ab62-fb7b-4bfa-bddf-ed18777a226e');
INSERT INTO "UserSkill" ("userId", "skillId", "id") VALUES ('cb8dc4ed-b82b-44ea-a458-41423b22bacd', '489ffa81-2cb5-42a8-9b0d-26aa9ffd93c2', 'd9611731-88d3-4149-a9a0-16708ef316ac');
INSERT INTO "UserSkill" ("userId", "skillId", "id") VALUES ('a8c83f11-dd81-4ccd-ab46-c089991061bb', '56e7e35f-333c-4ad5-b8f7-451e9b6696ef', '5878be53-1c49-4f02-870b-f5a14474f247');
INSERT INTO "UserSkill" ("userId", "skillId", "id") VALUES ('21a857f1-ba5f-4435-bcf6-f910ec07c0dc', '56e7e35f-333c-4ad5-b8f7-451e9b6696ef', '0a63f566-ab33-430c-a7c5-74b028e53ace');
INSERT INTO "UserSkill" ("userId", "skillId", "id") VALUES ('21a857f1-ba5f-4435-bcf6-f910ec07c0dc', '4b6373e2-6b19-4255-937a-092224a1a0c6', '3278a80c-751c-4762-9a9a-330b6c1faa33');
INSERT INTO "UserSkill" ("userId", "skillId", "id") VALUES ('9a2fd90d-d9aa-406c-a57c-92635a80ee7a', '4b6373e2-6b19-4255-937a-092224a1a0c6', '3fe1a77d-ae2a-43d5-87bb-c4edee286783');

INSERT INTO "Message" ("id", "email", "subject", "content", "dateSent", "userId") VALUES ('cb6e4cb8-d9b0-44ec-a5f9-428ff34f40d4', '231Russ_Rogahn@gmail.com', 'Issue with login', 'Hello I would like to know more about your services. Could you please provide some details', '2025-04-02T02:22:09.386Z', '21a857f1-ba5f-4435-bcf6-f910ec07c0dc');
INSERT INTO "Message" ("id", "email", "subject", "content", "dateSent", "userId") VALUES ('2426e48d-1a7a-468c-bb01-96d5f1932086', '236Emmet99@hotmail.com', 'Collaboration proposal', 'Hello I would like to know more about your services. Could you please provide some details', '2025-02-12T22:35:59.045Z', '434f291e-c15d-4161-a549-4427e42d1cd0');
INSERT INTO "Message" ("id", "email", "subject", "content", "dateSent", "userId") VALUES ('34b78bc5-8398-4c75-98ba-5e0af7deb0a1', '241Julian_Bogisich@hotmail.com', 'Collaboration proposal', 'Hello I would like to know more about your services. Could you please provide some details', '2024-06-08T19:51:02.012Z', '21a857f1-ba5f-4435-bcf6-f910ec07c0dc');
INSERT INTO "Message" ("id", "email", "subject", "content", "dateSent", "userId") VALUES ('5a0bd709-6989-4b9c-a816-4acf438b18ea', '246Jacynthe.Hamill10@hotmail.com', 'Feedback on your website', 'Hello I would like to know more about your services. Could you please provide some details', '2024-05-19T21:05:56.443Z', 'cb8dc4ed-b82b-44ea-a458-41423b22bacd');
INSERT INTO "Message" ("id", "email", "subject", "content", "dateSent", "userId") VALUES ('0bf4ceae-dfda-4560-9329-ff996eafa7fd', '251Gerardo.Christiansen@yahoo.com', 'Feedback on your website', 'I recently visited your website and I have some feedback that I would like to share.', '2024-05-01T16:23:53.960Z', 'a8c83f11-dd81-4ccd-ab46-c089991061bb');
INSERT INTO "Message" ("id", "email", "subject", "content", "dateSent", "userId") VALUES ('7d869c10-c025-433f-bdfe-f04c167584cc', '256Kenneth71@hotmail.com', 'Collaboration proposal', 'I am interested in a potential collaboration. Lets discuss the possibilities.', '2024-11-24T04:35:03.039Z', '9a2fd90d-d9aa-406c-a57c-92635a80ee7a');
INSERT INTO "Message" ("id", "email", "subject", "content", "dateSent", "userId") VALUES ('bc589cf3-f2b7-4325-8e66-260c13e86d0d', '261Talon.Osinski@yahoo.com', 'Issue with login', 'I am interested in a potential collaboration. Lets discuss the possibilities.', '2024-06-24T17:13:14.204Z', '36f831aa-6d71-4e37-8e27-b066cb682d72');
INSERT INTO "Message" ("id", "email", "subject", "content", "dateSent", "userId") VALUES ('766f142a-882c-4ebd-a1f6-7eceb4316f70', '266Janis70@hotmail.com', 'Collaboration proposal', 'I am having trouble logging into my account. Can you assist me with this issue', '2024-07-10T18:39:31.779Z', 'a5d7731a-c4c0-4e68-a2e2-7b1d48004888');
INSERT INTO "Message" ("id", "email", "subject", "content", "dateSent", "userId") VALUES ('ea5b6beb-53d3-4509-a2d0-28332fa9fcac', '271Lamont72@gmail.com', 'Inquiry about services', 'Hello I would like to know more about your services. Could you please provide some details', '2024-12-10T18:09:52.841Z', 'a5d7731a-c4c0-4e68-a2e2-7b1d48004888');
INSERT INTO "Message" ("id", "email", "subject", "content", "dateSent", "userId") VALUES ('dafb9030-18a6-43c0-91c2-ace3612e4be5', '276Marcia59@gmail.com', 'Collaboration proposal', 'I recently visited your website and I have some feedback that I would like to share.', '2024-12-25T03:51:03.026Z', 'a5d7731a-c4c0-4e68-a2e2-7b1d48004888');

  `

  const sqls = splitSql(sql)

  for (const sql of sqls) {
    try {
      await prisma.$executeRawUnsafe(`${sql}`)
    } catch (error) {
      console.log(`Could not insert SQL: ${error.message}`)
    }
  }
}

main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async error => {
    console.error(error)
    await prisma.$disconnect()
    process.exit(1)
  })
