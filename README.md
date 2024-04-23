<!-- STEP 1 and 2 can be skipped if the server has node and the ES library already installed -->
1. install node and npm
https://github.com/nodesource/distributions

2. install elasticsearch lib globally
    Step 1: wget -qO - https://artifacts.elastic.co/GPG-KEY-elasticsearch | sudo apt-key add -
    Step 2: sudo sh -c 'echo "deb https://artifacts.elastic.co/packages/7.x/apt stable main" > /etc/apt/sources.list.d/elastic-7.x.list'
    Step 3: sudo apt-get update
    Step 4: sudo apt-get install elasticsearch
    Step 5: sudo service elasticsearch start
    Step 6: sudo systemctl enable elasticsearch

    <!-- this library is in use in the elastic-empty.js script -->
    using npm:
        npm install @elastic/elasticsearch

3. check if index exists
    -run elastic-empty.js script
    command: node elastic-empty.js

4. run script to work on mappings
    - run elastic_index-mappings.sh bash
    command: chmod +x elastic_index-mappings.sh
             ./elastic_index-mappings.sh

5. run script to dump data from input to output ES
    - run index-data.sh bash
    command: chmod +x index-data.sh
             nohup bash ./index-data.sh &> index_files_directory/progress.log &
             <!-- ^^write logs into directory with scripts -->
             tail -f index_files_directory/progress.log
             <!-- ^^ tail logs to know what's happening -->