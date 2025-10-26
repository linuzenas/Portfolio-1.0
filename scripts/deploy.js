#!/usr/bin/env node

const { execSync } = require('child_process');
const fs = require('fs');

console.log('🚀 Deploying Linu Zenas Portfolio Website...\n');

try {
  // Check if we're in a git repository
  execSync('git status', { stdio: 'ignore' });
  
  // Build the project
  console.log('📦 Building project...');
  execSync('npm run build', { stdio: 'inherit' });
  
  // Check if Vercel CLI is installed
  try {
    execSync('vercel --version', { stdio: 'ignore' });
    console.log('\n🌐 Deploying to Vercel...');
    execSync('vercel --prod', { stdio: 'inherit' });
  } catch (error) {
    console.log('\n⚠️  Vercel CLI not found. Please install it with: npm i -g vercel');
    console.log('Or deploy manually through the Vercel dashboard.');
  }
  
  console.log('\n✅ Deployment complete!');
  console.log('\nDon\'t forget to:');
  console.log('- Update environment variables if needed');
  console.log('- Configure custom domain if desired');
  console.log('- Test the live website thoroughly');
  
} catch (error) {
  console.error('\n❌ Deployment failed:', error.message);
  process.exit(1);
}
