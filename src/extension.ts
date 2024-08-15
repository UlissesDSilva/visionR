
import * as vscode from 'vscode';

let statusBarItem: vscode.StatusBarItem;
let work = vscode.workspace.getConfiguration('workbench');

export function activate(context: vscode.ExtensionContext) {
	statusBarItem = vscode.window.createStatusBarItem(
		vscode.StatusBarAlignment.Left,
		1000
	);

	context.subscriptions.push(statusBarItem);

	updateStatusBar(context);
}

function updateStatusBar(context: vscode.ExtensionContext): void {
	console.log(work.get('colorTheme'));
	work.update('colorTheme', 'Default Light+', 1)
	console.log(work.get('colorTheme'));

	statusBarItem.text = "Status Bar";
	statusBarItem.tooltip = "SB";
	statusBarItem.show();
}

// export function deactivate() {}
