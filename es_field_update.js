const { Client } = require('@elastic/elasticsearch');

// Elasticsearch configuration
const esConfig = {
  node: 'https://vpc-hubtel-paylinks-db3boktpmm5fv372tnvyu2xtk4.eu-west-1.es.amazonaws.com'
};

// Elasticsearch client
const esClient = new Client(esConfig);

// Index details
const indexName = 'your_index_name';

// Update documents in the index
async function updateDocuments() {
  try {
    const response = await esClient.updateByQuery({
      index: indexName,
      body: {
        query: {
          bool: {
            must: [
              { term: { status: 'Active' } },
              { term: { isSendMoney: true } },
              { term: { isBusiness: true } },
            ],
          },
        },
        script: {
          source: 'ctx._source.status = "Inactive"',
          lang: 'painless',
        },
      },
    });

    console.log(`Updated ${response.body.updated} documents.`);
  } catch (error) {
    console.error('Error updating documents:', error);
  } finally {
    // Close the Elasticsearch client connection
    esClient.close();
  }
}

// Run the update function
updateDocuments();
