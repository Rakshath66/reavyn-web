// test-mongo.js
// Run this file separately to test MongoDB connection
import { MongoClient } from 'mongodb';
import dotenv from 'dotenv';

// Load environment variables
dotenv.config({ path: '.env.local' });

async function testConnection() {
  console.log('Testing MongoDB connection...');
  console.log('Connection string (hidden password):', 
    process.env.MONGODB_URI?.replace(/\/\/([^:]+):([^@]+)@/, '//$1:****@')
  );
  
  if (!process.env.MONGODB_URI) {
    console.error('❌ MONGODB_URI not found in environment variables');
    return;
  }

  const client = new MongoClient(process.env.MONGODB_URI, {
    serverSelectionTimeoutMS: 30000,
    connectTimeoutMS: 30000,
  });

  try {
    console.log('Attempting to connect...');
    await client.connect();
    console.log('✅ Connected successfully!');
    
    // Test database access
    const db = client.db();
    console.log('✅ Database name:', db.databaseName);
    
    // List collections
    const collections = await db.listCollections().toArray();
    console.log('✅ Collections:', collections.map(c => c.name));
    
    // Try inserting a test document
    const testCollection = db.collection('contacts');
    const result = await testCollection.insertOne({
      test: true,
      timestamp: new Date(),
      message: 'Connection test'
    });
    console.log('✅ Test document inserted:', result.insertedId);
    
  } catch (error) {
    console.error('❌ Connection failed:', error.message);
    console.error('Error details:', error);
  } finally {
    await client.close();
    console.log('Connection closed');
  }
}

testConnection();