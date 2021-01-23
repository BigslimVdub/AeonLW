# A new lightweight GUI Wallet for AEON community users

![AeonLW Startup](https://github.com/BigslimVdub/AeonLW/blob/master/Images/App%20startup.png)

---

Welcome to AeonLW, the new Electron based Aeon Wallet. This wallet is a new lightweight wallet for Aeon users. It adds to the usability of Aeon for anyone who choses to use the currency.

![AeonLW Dark mode](https://github.com/BigslimVdub/AeonLW/blob/master/Images/AeonLW%20OSX%20Dark%20Mode.png)

![AeonLW Light mode](https://github.com/BigslimVdub/AeonLW/blob/master/Images/AeonLW%20OSX%20Light%20Mode.png)

## Wallet switch option.
   You can keep several Aeon wallets on one PC, and quickly switch between them.

## Local and Remote Daemon usage
   We took best from both ways of sync: remote (speed) and local (reliability). At wallet startup, you connect to a remote node allowing a faster yet still secure sync, or a local daemon where you're downloading the blockchain files on your hard drive in the background.

## Advanced user settings. You can rely on predefined optimum settings, or you can edit settings of the wallet:
  - Wallet Syncronization Switch (local/remote nodes)
  - Lmdb storage path (define your blockchain storage location)
  - Various ports for wallet and daemon usage (daemon, p2p, aeond, remote etc)
  - Remote node URL (define what remote nodes you connect to)
  - Bandwidth utilization for full node usage (upload/download speed)

## Address book
   Adding recipients into your address book will allow you keep track of who you have sent funds to - you can add recipients of your payments before or after transactions have been processed.

## Auto Integrated Address creation
   When creating a new wallet, integrated address' are automatically created for you. 

## Transaction history tab
   A scrollable field where you can check your prior transactions quickly and securely. You can also check your transactions on a block explorer through the wallet interface button.

## Non English seed restore
   Restore your wallet with non-English characters (Russian, German, Chinese and other languages)

## Import wallet from old versions of Aeon
   Use legacy or current wallet seed & key to restore wallets. You can also restore from AeonLW generated key files with the correct password.

---

### Building from source

```
npm install -g quasar-cli
git clone https://github.com/aeonix/aeon
cd aeon
-- for development testing: make release-static (Wait for aeon to build binaries)
-- for personal use: You can download the latest Aeon cli release and use those binaries if you choose to.
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

To build on Debian:

```
npm run deb64
```
or for RedHat:
```
npm run rom64
```
Note: this has not been fully tested, recommend to use ``npm run build`` for your specific operating system.

### Change NOTES:

v1.0.0 - Initial release usable on Daemon version 0.12.9.0 mainnet. 
v1.0.1 - Maintenance release to incorporate locked ring 3 and use of latest Aeon binaries from 9/2019
v1.1.0 - Mainnet release of AeonLW for use with Daemon/RPC versions 0.13.0.0, minor enhancements to operation and text for better UX
v1.2.0 - Update to v0.13.1.0 Daemon/RPC, Other small enhancements for functionality. Updated "About" page for more links. Bump version.
v1.4.0 - Update to Aeon v0.14.0.0 Daemon/RPC, Fix wallet and config creation issues, Fix wallet swtiching issues, Bump version to match Aeon
v1.4.1 - Update daemon/rpc to v0.14.1.0 Aeon
v1.4.2 - Refresh logos and other build fixes

### Known AeonLW Bugs/Issues

* When first installing AeonLW with no Aeon blockchain file in your specified folder (you have never synced a daemon with the Aeon network before), AeonLW may take a while to sync with the network as it is doing a full sync not fast sync validating all blocks on the blockchain from 0. Fix- Wait for daemon to sync. This may take up to 2 hours on lower-end hardware (ex: HDD or 2 core processor) or longer if the user has poor/slow internet connection. Aeon blockchain sync time is considerably faster than other blockchains with 6 years of blockchain history to validate and 8gb of data.

* If the user creates or restores a wallet before the daemon sync is 100% and moves to wallet main screen, updating progress may look like it is stuck for block sync and wallet sync. Daemon and Wallet are syncing in the background and some lower-end hardware takes longer to refresh the status bars. Fix- User closes the application and reopens and an updated block height will be shown for both as sync re-continues.

* If the user creates or restores a wallet after daemon sync is 100% and user moves to wallet main screen, progress bar shows 1/***** 0% for a while. Fix- Wallet files take time to validate all blocks from 0 to ensure no transactions are missed. Please wait for wallet sync to finish. The same issues apply here as noted in issue one. Full wallet sync with a synced daemon should take about 45minutes from block 0 using a fully synced daemon using modern hardware. Remote node sync may be slower depending on hardware or data transfer limits of remote node. 

* If the user selects a remote node that does not support the latest Daemon or Wallet, the application may hang up. Fix- Use local daemon or remote daemon with a known latest daemon matching AeonLW in operation. AeonLW does save RPC logs in .Aeon/logs folder where user can check errors noted by the wallet-rpc embedded in AeonLW.

* AeonLW will not import my old wallet.keys file I used before trying AeonLW. Fix- AeonLW can not import wallet files from anything other than AeonLW generated electron wallet files. If you try importing a wallet file generated from the Official Aeon-GUI or Simplewallet it will fail. Try restoring from seed words in AeonLW if you want to use your old wallet on AeonLW.

* I tried AeonLW but want to go back to using an older blockchain version of Aeon for some reason. Fix- You will not be able to use an older AeonLW version with a current blockchain version file. AeonLW will fail or lock up due to no error handling for this. If you want to use an older version of AeonLW, you must either choose a new blockchain file location and re-sync the blockchain or delete your current blockchain LMDB file and resync from 0 in the standard location /aeon/lmdb/.

---

### LICENSE

Copyright (c) 2019-2021, BigslimVdub

Copyright (c) 2018-2019, Ryo Currency Project

Copyright (c) 2014-2021, Aeon Currency Project

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
