"use client";
import { useRef } from "react";
import { useEditor, EditorContent } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import Image from "@tiptap/extension-image";
import Link from "@tiptap/extension-link";
import Underline from "@tiptap/extension-underline";
import Placeholder from "@tiptap/extension-placeholder";
import TextAlign from "@tiptap/extension-text-align";
import { TextStyle } from "@tiptap/extension-text-style";
import Color from "@tiptap/extension-color";
import Highlight from "@tiptap/extension-highlight";
import CharacterCount from "@tiptap/extension-character-count";
import {
  Bold as BoldIcon,
  Italic as ItalicIcon,
  Underline as UnderlineIcon,
  Strikethrough,
  Palette,
  Highlighter,
  AlignLeft,
  AlignCenter,
  AlignRight,
  List,
  ListOrdered,
  Quote,
  Code,
  Minus,
  Link as LinkIcon,
  Undo2,
  Redo2,
} from "lucide-react";
import { Button } from "@/components/ui/Button";

export function BlogEditor({
  content,
  onChange,
}: {
  content: string;
  onChange: (html: string) => void;
}) {
  const colorInputRef = useRef<HTMLInputElement>(null);

  const editor = useEditor({
    extensions: [
      StarterKit,
      Image,
      Link.configure({ openOnClick: false }),
      Underline,
      Placeholder.configure({ placeholder: "Blog content likhna shuru karein..." }),
      TextAlign.configure({ types: ["heading", "paragraph"] }),
      TextStyle,
      Color,
      Highlight.configure({ multicolor: true }),
      CharacterCount,
    ],
    content,
    immediatelyRender: false,
    onUpdate: ({ editor }) => {
      onChange(editor.getHTML());
    },
    editorProps: {
      attributes: {
        class: "prose prose-sm max-w-none min-h-[300px] focus:outline-none px-3 py-2",
      },
    },
  });

  if (!editor) return null;

  // Toolbar click se editor selection na khoye
  const keepFocus = (e: React.MouseEvent) => {
    const target = e.target as HTMLElement;
    if (target.tagName !== "SELECT" && target.tagName !== "INPUT") {
      e.preventDefault();
    }
  };

  return (
    <div className="border border-neutral-300 rounded-md">
      <div
        className="flex gap-1 border-b border-neutral-200 p-2 flex-wrap items-center"
        onMouseDown={keepFocus}
      >
        <Button type="button" variant="secondary" onClick={() => editor.chain().focus().undo().run()}>
          <Undo2 size={16} />
        </Button>
        <Button type="button" variant="secondary" onClick={() => editor.chain().focus().redo().run()}>
          <Redo2 size={16} />
        </Button>

        <div className="w-px h-6 bg-neutral-200 mx-1" />

        <select
          className="border border-neutral-300 rounded-md text-sm px-2 py-1.5"
          value={
            editor.isActive("heading", { level: 1 })
              ? "1"
              : editor.isActive("heading", { level: 2 })
                ? "2"
                : editor.isActive("heading", { level: 3 })
                  ? "3"
                  : "0"
          }
          onChange={(e) => {
            const level = Number(e.target.value);
            if (level === 0) {
              editor.chain().focus().setParagraph().run();
            } else {
              editor.chain().focus().toggleHeading({ level: level as 1 | 2 | 3 }).run();
            }
          }}
        >
          <option value="0">Paragraph</option>
          <option value="1">Heading 1</option>
          <option value="2">Heading 2</option>
          <option value="3">Heading 3</option>
        </select>

        <div className="w-px h-6 bg-neutral-200 mx-1" />

        <Button
          type="button"
          variant={editor.isActive("bold") ? "primary" : "secondary"}
          onClick={() => editor.chain().focus().toggleBold().run()}
        >
          <BoldIcon size={16} />
        </Button>
        <Button
          type="button"
          variant={editor.isActive("italic") ? "primary" : "secondary"}
          onClick={() => editor.chain().focus().toggleItalic().run()}
        >
          <ItalicIcon size={16} />
        </Button>
        <Button
          type="button"
          variant={editor.isActive("underline") ? "primary" : "secondary"}
          onClick={() => editor.chain().focus().toggleUnderline().run()}
        >
          <UnderlineIcon size={16} />
        </Button>
        <Button
          type="button"
          variant={editor.isActive("strike") ? "primary" : "secondary"}
          onClick={() => editor.chain().focus().toggleStrike().run()}
        >
          <Strikethrough size={16} />
        </Button>

        <div className="w-px h-6 bg-neutral-200 mx-1" />

        <Button type="button" variant="secondary" onClick={() => colorInputRef.current?.click()}>
          <Palette size={16} />
        </Button>
        <input
          ref={colorInputRef}
          type="color"
          className="w-0 h-0 opacity-0 absolute"
          onChange={(e) => editor.chain().focus().setColor(e.target.value).run()}
        />
        <Button
          type="button"
          variant={editor.isActive("highlight") ? "primary" : "secondary"}
          onClick={() => editor.chain().focus().toggleHighlight({ color: "#fff3a3" }).run()}
        >
          <Highlighter size={16} />
        </Button>

        <div className="w-px h-6 bg-neutral-200 mx-1" />

        <Button
          type="button"
          variant={editor.isActive({ textAlign: "left" }) ? "primary" : "secondary"}
          onClick={() => editor.chain().focus().setTextAlign("left").run()}
        >
          <AlignLeft size={16} />
        </Button>
        <Button
          type="button"
          variant={editor.isActive({ textAlign: "center" }) ? "primary" : "secondary"}
          onClick={() => editor.chain().focus().setTextAlign("center").run()}
        >
          <AlignCenter size={16} />
        </Button>
        <Button
          type="button"
          variant={editor.isActive({ textAlign: "right" }) ? "primary" : "secondary"}
          onClick={() => editor.chain().focus().setTextAlign("right").run()}
        >
          <AlignRight size={16} />
        </Button>

        <div className="w-px h-6 bg-neutral-200 mx-1" />

        <Button
          type="button"
          variant={editor.isActive("bulletList") ? "primary" : "secondary"}
          onClick={() => editor.chain().focus().toggleBulletList().run()}
        >
          <List size={16} />
        </Button>
        <Button
          type="button"
          variant={editor.isActive("orderedList") ? "primary" : "secondary"}
          onClick={() => editor.chain().focus().toggleOrderedList().run()}
        >
          <ListOrdered size={16} />
        </Button>
        <Button
          type="button"
          variant={editor.isActive("blockquote") ? "primary" : "secondary"}
          onClick={() => editor.chain().focus().toggleBlockquote().run()}
        >
          <Quote size={16} />
        </Button>
        <Button
          type="button"
          variant={editor.isActive("codeBlock") ? "primary" : "secondary"}
          onClick={() => editor.chain().focus().toggleCodeBlock().run()}
        >
          <Code size={16} />
        </Button>
        <Button type="button" variant="secondary" onClick={() => editor.chain().focus().setHorizontalRule().run()}>
          <Minus size={16} />
        </Button>

        <div className="w-px h-6 bg-neutral-200 mx-1" />

        <Button
          type="button"
          variant={editor.isActive("link") ? "primary" : "secondary"}
          onClick={() => {
            const previousUrl = editor.getAttributes("link").href || "";
            const url = window.prompt("Enter URL", previousUrl);
            if (url === null) return;
            if (url === "") {
              editor.chain().focus().unsetLink().run();
            } else {
              editor.chain().focus().setLink({ href: url }).run();
            }
          }}
        >
          <LinkIcon size={16} />
        </Button>
      </div>

      <EditorContent editor={editor} />

      <div className="text-xs text-neutral-400 border-t border-neutral-200 px-3 py-1.5">
        {editor.storage.characterCount.words()} words · {editor.storage.characterCount.characters()} characters
      </div>
    </div>
  );
}