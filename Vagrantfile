# -*- mode: ruby -*-
# vi: set ft=ruby :

Vagrant.configure("2") do |config|
  config.vm.box = "ubuntu/bionic64"

#  config.vm.network "forwarded_port", guest: 4000, host: 4000, host_ip: "127.0.0.1"
#  config.vm.network "forwarded_port", guest: 4000, host: 4000, host_ip: "127.0.0.1"
  config.vm.network "private_network", ip: "192.168.50.40"

  # Create a private network, which allows host-only access to the machine
  # using a specific IP.
  # config.vm.network "private_network", ip: "192.168.33.10"

  # Share an additional folder to the guest VM. The first argument is
  # the path on the host to the actual folder. The second argument is
  # the path on the guest to mount the folder. And the optional third
  # argument is a set of non-required options.
  #config.vm.synced_folder ".", "/jekyll_data"

  config.vm.provider "virtualbox" do |vb|
    vb.memory = "512"
  end

  config.vm.provision "shell", inline: <<-SHELL
    set -xe
    apt-get update
    yes | apt-get install -y build-essential git ruby ruby-dev
    (
        cd /vagrant
        sudo gem update --system
        sudo gem install bundler
        sudo -Hu vagrant bundle install
    )
  SHELL
end
