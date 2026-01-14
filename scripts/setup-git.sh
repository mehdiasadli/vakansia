#!/bin/bash

get_os() {
    local os_name=$(uname -s)
    
    case "$os_name" in
        Darwin)
            echo "macos"
            ;;
        Linux)
            # Check for specific Linux distro
            if [ -f /etc/os-release ]; then
                . /etc/os-release
                echo "$ID" # Returns 'ubuntu', 'debian', 'fedora', 'alpine', etc.
            else
                echo "linux-generic"
            fi
            ;;
        CYGWIN*|MINGW*|MSYS*)
            echo "windows"
            ;;
        *)
            echo "unknown"
            ;;
    esac
}

echo "🔧 Setting up Git for `vakansia`..."
echo ""

os=$(get_os)

if ! command -v git &> /dev/null; then
  echo "❌ Git is not installed"
  echo "Please install git and try again"
  # Get current device os
  if [[ $os == "macos" ]]; then
    echo "On macOS, you can install git using Homebrew:"
    echo "brew install git"
  elif [[ $os == "windows" ]]; then
    echo "On Windows, you can install git using winget:"
    echo "winget install --id Git.Git -e --source winget"
  elif [[ $os == "ubuntu" || $os == "debian" ]]; then
    echo "On Ubuntu or Debian, you can install git using your package manager:"
    echo "sudo apt-get install git"
  elif [[ $os == "fedora" ]]; then
    echo "On Fedora, you can install git using dnf:"
    echo "sudo dnf install git"
    echo "Or, if it is <21, install with yum:"
    echo "sudo yum install git"
  elif [[ $os == "alpine" ]]; then
    echo "On Alpine, you can install git using apk:"
    echo "apk add git"
  elif [[ $os == "arch" ]]; then
    echo "On Arch, you can install git using pacman:"
    echo "pacman -S git"
  elif [[ $os == "gentoo" ]]; then
    echo "On Gentoo, you can install git using emerge:"
    echo "emerge --ask --verbose dev-vcs/git"
  elif [[ $os == "opensuse" ]]; then
    echo "On OpenSUSE, you can install git using zypper:"
    echo "zypper install git"
  fi
  echo "Or, visit https://git-scm.com/install to install git"
  echo "note: how do you even work without git? weird..."
  exit 1
fi

read -p "Install Git aliases? (y/n) " -n 1 -r
echo
if [[ $REPLY =~ ^[Yy]$ ]]; then
  echo "Installing aliases..."

  git config --global alias.ac '!git add . && git commit -m'
	git config --global alias.ch 'checkout'
	git config --global alias.chb 'checkout -b'
	git config --global alias.br 'branch'
	git config --global alias.brd 'branch -d'
	git config --global alias.mg 'merge'
	git config --global alias.rb 'rebase'
	git config --global alias.pl 'pull'
	git config --global alias.plo '!git pull origin $(git branch --show-current)'
	git config --global alias.ps 'push'
	git config --global alias.pso '!git push origin $(git branch --show-current)'
	git config --global alias.psuo '!git push -u origin $(git branch --show-current)'    

  echo "✅ Aliases installed successfully"
fi

echo ""
read -p "Configure Git user for this repo? (y/n) " -n 1 -r
echo
if [[ $REPLY =~ ^[Yy]$ ]]; then
  echo "Configuring Git user..."

  read -p "Enter your name: " name
  read -p "Enter your email: " email

  git config user.name "$name"
  git config user.email "$email"

  echo "✅ Git user configured successfully"
fi

echo ""
echo "✅ Git setup completed successfully"
echo "🚀 Happy coding!"
echo ""