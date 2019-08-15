# A new lightweight GUI Wallet for AEON community users

![AeonLW Startup](https://github.com/BigslimVdub/AeonLW/blob/master/Images/App%20startup.png)

---

Welcome to AeonLW, the new Electron based Aeon Wallet. This wallet is a new lightweight wallet for Aeon users. It adds to the usability of Aeon for anyone who choses to use the currency.

![AeonLW Dark mode](https://github.com/BigslimVdub/AeonLW/blob/master/Images/AeonLW%20OSX%20Dark%20Mode.png)

![AeonLW Light mode](https://github.com/BigslimVdub/AeonLW/blob/master/Images/AeonLW%20OSX%20Light%20Mode.png)

- Wallet switch option.
You can keep several Aeon wallets on one PC, and quickly switch between them.

-Local and Remote Daemon usage
We took best from both ways of sync: remote (speed) and local (reliability). At wallet startup, you connect to a remote node allowing a faster yet still secure sync, or a local daemon where you're downloading the blockchain files on your hard drive in the background.

- Advanced user settings
You can rely on predefined optimum settings, or you can edit settings of the wallet:
  - Wallet Syncronization Switch (local/remote nodes)
  - Lmdb storage path (define your blockchain storage location)
  - Various ports for wallet and daemon usage (daemon, p2p, aeond, remote etc)
  - Remote node URL (define what remote nodes you connect to)
  - Bandwidth utilization for full node usage (upload/download speed)

-  Address book
Adding recipients into your address book will allow you keep track of who you have sent funds to - you can add recipients of your payments before or after transactions have been processed.

-Auto Integrated Address creation
When creating a new wallet, integrated address' are automatically created for you. 

- Transaction history tab
A scrollable field where you can check your prior transactions quickly and securely. You can also check your transactions on a block explorer through the wallet interface button.

- Non English seed restore
Restore your wallet with non-English characters (Russian, German, Chinese and other languages)

- Import wallet from old versions of Aeon
Use legacy or current wallet seed & key to restore wallets. You can also restore from key files with the correct password.

---

### Building from source

```
npm install -g quasar-cli
git clone https://github.com/aeonix/aeon
cd aeon
cp /path/to/aeon/binaries/aeond /path/to/AeonLW/bin/
cp /path/to/aeon/binaries/aeon-wallet-rpc /path/to/AeonLW/bin/
cd /path/to/AeonLW
npm install
npm run build
```
To build on all operating systems run:

```
npm run build-all
```

### NOTE:
For building on the v0.12.9.0 Aeon network, for full functionality you must use 12.9 release daemon and current 12.9 master RPC for seed and wallet restore functions. 
If you use the current 12.9 release RPC you will be unable to restore a wallet and unable to restore or import a wallet made on v1.0.0 release on a later AeonLW release.
It is recommended to make a NEW wallet with AeonLW v1.0.0 release.

---

### LICENSE

Copyright (c) 2018-2019, Ryo Currency Project

Copyright (c) 2019, Aeon Currency Project

Portions of this software are available under BSD-3 license. Please see ORIGINAL-LICENSE for details

All rights reserved.

This is an open sourced project. Anyone can contribute. 

If you would like to contribute outside software changes, please feel free to contribute here:

Aeon address: XnZQsgTMKciVcyZxNch8TneZMNy4rCTmc5dgZ1GKEkAs3kGb89q3m26hUWtXUvcJNpgBikLTdoHkCXYcqxPJBwA3373F4hcVc

XMR addres: 85PJWUVwPJZQqP4WCZfNzUJ7X89YQoHDU3ponKBeqyzV7MKxzkWkzerJy3Yfo3gYwXi92uoF7KodkinZfA9aeVpRPPEXpAh

Thank you for supporting this project. Feedback is welcomed in any form. Please give thanks to Mosu-Forge for the
original implementation of Electron wallet for Ryo. 

THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY
EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF
MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL
THE COPYRIGHT HOLDER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL,
SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO,
PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS
INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT,
STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF
THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.

# AeonLW
