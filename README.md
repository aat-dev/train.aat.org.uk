Train Microsite
===============

This is the source code the http://train.aat.org.uk microsite  (HTML / CSS)


## Install 

    yarn install --pure-lockfile 


## Build 

To start the SASS compile from the 'src' folder into the 'build' folder please run in the directory root:

    gulp
    
    
    
    
    
## Deployment 

This is currently a job in Jenkins CI server called : 

    https://jenkins.aws.aat.org.uk/job/Deploy%20train.aat.org.uk/
    
    
The job takes the contents of the **/build** folder and sync it to the s3 with the following command : 


    aws s3 sync --acl public-read --region eu-west-1 ./build/ s3://train.aat.org.uk/transform


Please use the pipeline / job within Jenkins. 
