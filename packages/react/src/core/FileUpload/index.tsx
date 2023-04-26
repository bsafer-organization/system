import { Button } from '../Button'
import { IconButton } from '../IconButton'
import { Text } from '../Text'
import { Badge } from '../Badge'
import {
  ClipboardClose,
  ClipboardTick,
  Danger,
  ExportSquare,
  Receipt1,
  Trash
} from 'iconsax-react'
import React, { useEffect, useState } from 'react'
import { useDropzone } from 'react-dropzone'
import { DropZoneContainer, OptionalBadge } from './styles'

import { PropsToArray } from '../../helpers/propsToArray'

const supportedFiles = {
  pdf: {
    'application/pdf': ['.pdf']
  },
  image: {
    'image/*': ['.jpeg', '.jpg', '.png']
  },
  word: {
    'application/vnd.openxmlformats-officedocument.wordprocessingml.document': [
      '.docx'
    ]
  }
}

type ISupportedFiles = 'pdf' | 'image' | 'word'

export interface FileUploadProps {
  file?: File | string
  error?: string
  disabled?: boolean
  onChangeFile?: (file?: File) => void
  label?: string
  optional?: boolean
  supportedFiles?: ISupportedFiles[]
}

// const supportedFiles = {
//   'application/pdf': ['.pdf']
// }

const allExts = Object.keys(supportedFiles)
  .map((fileExt) => supportedFiles[fileExt as keyof typeof supportedFiles])
  .join(',')

export const FileUpload = ({
  error,
  file,
  disabled,
  onChangeFile,
  label = 'Arquivo da Guia',
  optional = false,
  supportedFiles = ['image', 'pdf']
}: FileUploadProps) => {
  const {
    isDragActive,
    isDragAccept,
    isDragReject,
    getRootProps,
    getInputProps
  } = useDropzone({
    onDropAccepted,
    accept: supportedFiles
  })

  const [attachedFile, setAttachedFile] = useState<File | string | null>(null)
  const fileUrl =
    attachedFile instanceof File
      ? URL.createObjectURL(attachedFile)
      : attachedFile

  function onDropAccepted(acceptedFiles: File[]) {
    if (onChangeFile) onChangeFile(acceptedFiles[0])
    setAttachedFile(acceptedFiles[0])
  }

  function removeFile() {
    if (onChangeFile) onChangeFile(undefined)
    setAttachedFile(null)
  }

  function handleViewFile() {
    if (fileUrl) {
      window.open(fileUrl, '_blank')
    }
  }

  useEffect(() => {
    if (file && disabled) {
      setAttachedFile(file)
    }
  }, [file, disabled])

  return (
    <div
      className={`flex flex-col p-5 rounded ${error ? 'bg-assistant-red-light' : 'bg-grey-100'
        }`}
    >
      <header className="flex items-center mb-4">
        <div className="flex justify-start items-center gap-2">
          <Text size="xs" weight="bold">
            {label}
          </Text>
          {optional && <OptionalBadge>Opcional</OptionalBadge>}
        </div>
        {disabled && (
          <Button
            size="sm"
            color="default"
            variant="text"
            type="button"
            endIcon={<ExportSquare />}
            className="ml-auto"
            onClick={handleViewFile}
          >
            Visualizar arquivo
          </Button>
        )}
        {!disabled && (
          <div className="ml-auto flex items-center">
            {file && (
              <IconButton
                size="sm"
                variant="text"
                color="default"
                type="button"
                onClick={removeFile}
              >
                <Trash />
              </IconButton>
            )}
            <IconButton
              size="sm"
              variant="text"
              color="default"
              type="button"
              onClick={handleViewFile}
            >
              <ExportSquare />
            </IconButton>
          </div>
        )}
      </header>
      <div className="flex-1">
        {!fileUrl && (
          <DropZoneContainer
            isDragAccept={isDragAccept}
            isDragReject={isDragReject}
            {...getRootProps()}
          >
            <input {...getInputProps()} disabled={disabled} />
            {isDragActive && isDragAccept && (
              <>
                <ClipboardTick size={24} className="text-assistant-blue-main" />
                <Text size="sm" color="assistant-blue-main">
                  Solte o arquivo <Text>e aguarde carregar</Text>
                </Text>
              </>
            )}

            {isDragActive && isDragReject && (
              <>
                <ClipboardClose size={24} className="text-assistant-red-main" />
                <Text size="sm" color="assistant-red-main">
                  Arquivo não suportado
                </Text>
              </>
            )}

            {!isDragActive && (
              <>
                <Receipt1 size={24} />
                <Text size="sm">
                  Arrate o arquivo ou{' '}
                  <Text color="assistant-blue-main">
                    clique aqui para carregar
                  </Text>
                </Text>
                <Text size="xs" color="grey-700">
                  Arquivo suportados: {allExts}
                </Text>
              </>
            )}
          </DropZoneContainer>
        )}
        {fileUrl && (
          <embed
            src={fileUrl}
            type="application/pdf"
            className="w-full min-h-[200px] rounded-lg"
          />
        )}
      </div>
      {error && (
        <footer className="text-assistant-red-main flex items-center gap-2 mt-2">
          <Danger size={16} />
          <Text size="xs">{error}</Text>
        </footer>
      )}
    </div>
  )
}
