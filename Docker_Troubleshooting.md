#Setting Up Docker + Troubleshooting
##Prerequisites
<p>0a. Make sure you downloaded the <a href="https://www.docker.com/products/docker-toolbox">Docker Toolbox</a>.</p>
<p>0b. Ensure you have VirtualBox installed.</p>

##Docker Compose
1. `git checkout dav` Go into the dav branch. 
2. `cd docker` Go into the docker folder. 
3. `docker-machine ip` Check the host ip. Save this ip somewhere, you are going to need to use this later.
4. `docker-compose up` Build the image and launch the container.
5. Open a browser (use Firefox or Internet Explorer) and type/copy-paste the resulting ip address in step (3) into the address bar. If you are using docker quickstart, it is 192.168.99.100:8000.
6. You should see the brainspell webpage. :smile:

##Troubleshooting
###Internet connection error
_**Note**: Although, even though your computer is connected to the internet, your virtual machine (VM) may not be. This could be because you have changed internet connections. If this is the case, just close docker and re-open it._
<ol>
<li>Ensure your computer is connected to the internet. </li>
<li>`docker-machine Stop` Stop the VM.</li>
<li>`docker-machine start` Start the VM.</li>
<li>`eval $(docker-machine env)` Evaluate the environment (if everything is ok, there will be no output).</li>
<li>`docker run hello-world` Check the VM connection by test-running hello-world.</li>
<li>`docker-compose up` If the VM is connected, try to build the image and launch the container.</li>
</ol>
