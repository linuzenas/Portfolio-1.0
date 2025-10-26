#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

console.log('🚀 Setting up Linu Zenas Portfolio Website...\n');

// Create placeholder images
const createPlaceholderImage = (dir, filename, description) => {
  const filePath = path.join('public', dir, filename);
  if (!fs.existsSync(filePath)) {
    fs.writeFileSync(filePath, `# Placeholder for ${description}\n# Replace with actual image file`);
    console.log(`✅ Created placeholder: ${filePath}`);
  }
};

// Create placeholder images
createPlaceholderImage('projects', 'color-palette.jpg', 'Color Palette Generator project');
createPlaceholderImage('projects', 'zenasbot.jpg', 'ZenasBot Telegram AI Assistant');
createPlaceholderImage('projects', 'virtual-mouse.jpg', 'Virtual Mouse Controller');
createPlaceholderImage('projects', 'youtube-clone.jpg', 'YouTube Clone project');
createPlaceholderImage('projects', 'event-management.jpg', 'Event Management System');
createPlaceholderImage('projects', 'rock-paper-scissors.jpg', 'Rock Paper Scissors Game');

createPlaceholderImage('blog', 'figma-guide.jpg', 'Figma Beginner Guide article');
createPlaceholderImage('blog', 'responsive-web.jpg', 'Responsive Web Applications article');
createPlaceholderImage('blog', 'ai-tools.jpg', 'AI-Powered Development Tools article');

console.log('\n🎉 Setup complete!');
console.log('\nNext steps:');
console.log('1. Run: npm install');
console.log('2. Run: npm run dev');
console.log('3. Replace placeholder images with actual project screenshots');
console.log('4. Update personal information in the components');
console.log('\nHappy coding! 🚀');
